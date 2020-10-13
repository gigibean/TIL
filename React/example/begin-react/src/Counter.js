import React, {useReducer} from 'react';

function reducer(state, action) {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => {
        dispatch({type: 'INCREMENT'});
    }
    const onDecrease = () => {
        dispatch({type: 'DECREMENT'});
    }
    return (
        <>
            <h1>{number}</h1>
            <button onClick={onIncrease}> + 1 </button>
            <button onClick={onDecrease}> - 1 </button>
        </>
    )
}
// function Counter() {
//     const [number, setNumber] = useState(0);

//     const onIncrease = () => {
//         if(number < 10) {
//             setNumber(prevNumber => prevNumber + 1)
//         }
//         else {
//             alert('10 is limit')
//         }

//     }
//     const onDecrease = () => {
//         if(number > 0) {
//             setNumber(prevNumber => prevNumber - 1)
//         }
//         else {
//             alert('0 is limit')
//         }
//     }
//     return (
//         <div>
//             <h1 id="number">{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

export default Counter;