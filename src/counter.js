import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Counter = () => {
    const counter = useSelector(state => state.count);
    const dispatch = useDispatch();
    const increase = () => {
        dispatch({type: 'increase'});
    };
    const decrease = () => {
        dispatch({type: 'decrease'});
    };
    const reset = () => {
        dispatch({type: 'reset'})
    };
    return (
        <div>
            <p>{counter}</p>
            <button onClick={increase}>Увеличить</button>
            <button onClick={decrease}>Уменьшить</button>
            <button onClick={reset}>Сбросить</button>
        </div>
    );
};

export default Counter;