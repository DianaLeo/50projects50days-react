import './AnimatedCountdown.css';
import { useState, useRef, useEffect } from 'react';

//Use useEffect to solve ref.current = undefined/null
function AnimatedCountdown() {
    const [count, setCount] = useState(5);
    const div_count = useRef(null);
    const div_goContainer = useRef(null);
    const div_countDownContainer = useRef(null);

    //Runs only on the first render
    useEffect(() => {
        div_goContainer.current.hidden = true;
    }, []);

    //Runs on every render
    useEffect(() => {
        div_count.current.classList.add('in');
        let timer1 = setTimeout(() => {
            div_count.current.classList.remove('in');
        }, 900);
        let timer2 = setTimeout(() => {
            if (count <= 0) {
                div_countDownContainer.current.classList.add('out');
                div_goContainer.current.hidden = false;
                div_goContainer.current.classList.add('in');
                return () => {
                    clearTimeout(timer1);
                    clearTimeout(timer2);
                };
            }
            setCount(count => count - 1);
        }, 1000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    });

    const resetCounter = () => {
        setCount(5);
        div_goContainer.current.hidden = true;
    }

    return (
        <div className='AnimatedCountdown_container'>
            <div ref={div_countDownContainer} id="countDownContainer">
                <div ref={div_count} id="count">{count}</div>
                <p>Get Ready</p>
            </div>
            <div ref={div_goContainer} id="goContainer">
                <p>Go</p>
                <button onClick={resetCounter}>Start again</button>
            </div>
        </div>
    )
}
export { AnimatedCountdown };