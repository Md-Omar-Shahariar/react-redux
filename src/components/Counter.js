import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/Actions/Actions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  console.log(count);
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter; //1.state-- count = 0
//2.action-- increment,decrement,reset
//3.increment--count=> count+1
//4.decrement--count=> count-1
//5.reset--count=>0
//6.store
