import { useState, useEffect } from 'react';
import './GoContainer.css'

function GoContainer({ count, resetCounter }) {
    const [animation, setAnimation] = useState(false);
    const [hidden, setHidden] = useState(true);

    //Runs only on the first render
    useEffect(() => {
        if (count < 0) {
            setHidden(false);
            setAnimation(true);
            return;
        }
        setHidden(true);
    });

    const names = ['goContainer'];
    if (animation) {
        names.push('in')
    } else {
        const index = names.indexOf('in');
        (index > -1) && names.splice(index, 1);
    };
    if (hidden) {
        names.push('hidden')
    } else {
        const index = names.indexOf('hidden');
        (index > -1) && names.splice(index, 1);
    };

    return (
        <div className={names.join(' ')}>
            <p>Go</p>
            <button onClick={() => {
                setHidden(true);
                resetCounter();
            }}>Start again</button>
        </div>
    )
}

export { GoContainer }