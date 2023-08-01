import { useState, useRef, useEffect } from 'react';
import './AutoTextEffect.css';
import userEvent from '@testing-library/user-event';

function AutoTextEffect() {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias velit sapiente beatae nostrum voluptates pariatur dignissimos reprehenderit possimus autem iusto dolorum rerum officia, excepturi praesentium nesciunt? Quasi, ab illo."

    const [speed, setSpeed] = useState(1);
    let speedRef = useRef(null);
    speedRef.current = speed;
    console.log('speed=', speed);
    let i = 0;
    let myTimeout = null;

    let textP = useRef(null);
    let speedNumber = useRef(null);


    useEffect(() => {
        console.log('useEffect()');
        timer();
        return () => {
            if (myTimeout != null)
                clearTimeout(myTimeout);
        }
    }, []);

    function onInputHandler(e) {
        setSpeed(e.target.value);
        console.log(speed, e.target.value);
    }

    function timer() {
        if (textP.current != null)
            textP.current.textContent = text.slice(0, i + 1);
        i++;
        if (i >= text.length) { i = 0; }
        myTimeout = setTimeout(timer, 500 / speedRef.current);
    }

    return (
        <section className='AutoTextEffect_container'>
            <div id="textContainer">
                <p ref={textP} id="text"></p>
            </div>
            <div id="speedContainer">
                <span>Speed:  </span>
                <input ref={speedNumber} onInput={e => onInputHandler(e)} type="number" id="number" value={speed} min="1" max="10"></input>
            </div>
        </section>
    )
}

export default AutoTextEffect;