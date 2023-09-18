import React from 'react';
import { useRef } from 'react';
import './AnimatedNavigation.css';

function AnimatedNavigation() {
    //DOM operation with Ref
    const myRef = useRef(null);

    const btnClickHandler = () => {
        myRef.current.classList.toggle('open')
    };

    return (
        <>
            <section className='AnimatedNavigation_container'>
                <nav ref={myRef}>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Works</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button onClick={btnClickHandler}>
                        <div className="line" id="line1"></div>
                        <div className="line" id="line2"></div>
                    </button>
                </nav>
            </section>

        </>
    )
}
export {AnimatedNavigation};