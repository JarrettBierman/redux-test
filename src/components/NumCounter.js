import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {increase, decrease} from '../store/actions';

function NumCounter() {
    const num = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return ( 
        <React.Fragment>
            <h3>Number: {num}</h3>
            <button className="btn btn-success mx-1" onClick={() => dispatch(increase())}>+</button>
            <button className="btn btn-success mx-1" onClick={() => dispatch(decrease())}>-</button>
        </React.Fragment>
        );
}
 
export default NumCounter;