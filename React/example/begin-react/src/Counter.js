import React, {useState} from 'react';

function Counter() {
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        if(number < 10) {
            setNumber(number + 1)
        }
        else {
            alert('10 is limit')
        }

    }
    const onDecrease = () => {
        if(number > 0) {
            setNumber(number - 1)
        }
        else {
            alert('0 is limit')
        }
    }
    return (
        <div>
            <h1 id="number">{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;