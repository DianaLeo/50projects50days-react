import { useState, useEffect } from 'react';
import './CountDownContainer.css';
import { json } from 'react-router-dom';

function CountDownContainer({ count }) {
    const [animation, setAnimation] = useState({
        containerAnimation: false,
        countDivAnimation: true
    });

    useEffect(() => {
        setAnimation(previous => { return { ...previous, countDivAnimation: true, containerAnimation: false } });
        let timer1 = setTimeout(() => {
            setAnimation(previous => { return { ...previous, countDivAnimation: false } });
        }, 900);
        if (count < 0) {
            setAnimation(previous => { return { ...previous, countDivAnimation: false, containerAnimation: true  } });
        }
        return () => {clearTimeout(timer1)};
    }, [count]);//Dependency has to be 'count', otherwise memory leak. Because setAnimations also trigger re-renders.
    
    return (
        <div className={`countDownContainer${animation.containerAnimation ? " out" : ""}`}>
            <div className={`count${animation.countDivAnimation ? " in" : ""}`}>{count<0?0:count}</div>
            <p>Get Ready</p>
        </div>
    )
}

export { CountDownContainer }
