import React, { useEffect, useState } from 'react'

export default function Timer(props) {
    console.log(props.timer)
    const [timeLeft, setTimeLeft] = useState(props.timer);
    useEffect(() => {
        if(timeLeft == 0){
            console.log('this is check')
            document.getElementById('timercomponent').classList.add('hidden');
            // props.setTimerFalse();
            props.timeUp();
        }
        const timer =
            timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <div id='timercomponent'>
            {timeLeft && <h2>{parseInt(timeLeft/60)} <span>:</span> {timeLeft%60 > 10 ? timeLeft%60 : `0${timeLeft%60}`}</h2>}
        </div>
    );
}
