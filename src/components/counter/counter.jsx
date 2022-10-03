import React, {useState} from "react";
import classes from './counter.module.css';

const Counter = function(){
    const [ count, setCount] = useState(1)
    function increment(){
        setCount(count+1)
      }
      function decrement(){
        setCount(count-1)
      }
    return (
        <div className={classes.counter}>
          <span className={classes.counter_change} onClick = {decrement}>-</span>
          <span>{count}</span>
          <span className={classes.counter_change} onClick= {increment}>+</span>
        </div>
    );
}

export default Counter;