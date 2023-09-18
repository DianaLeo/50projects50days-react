import './AnimatedCountdown.css';
import { useState, useEffect } from 'react';
import { CountDownContainer } from './components/CountDownContainer';
import { GoContainer } from './components/GoContainer';


//Single responsibility: only for counting down
function AnimatedCountdown() {
    const [count, setCount] = useState(5);

    //Runs on every render
    useEffect(() => {
        let timer = setTimeout(() => {
            if (count >= 0) { setCount(count => count - 1) }
        }, 1000);
        return () => { clearTimeout(timer) };
    });
    
    const resetCounter = () => { setCount(5) }

    return (
        <div className='AnimatedCountdown_container'>
            <CountDownContainer count={count} />
            <GoContainer count={count} resetCounter={resetCounter} />
        </div>
    )
}
export { AnimatedCountdown };