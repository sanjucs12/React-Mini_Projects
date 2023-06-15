import React from "react";
import "./Count.css";
import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  const increamentHandler = () => {
    setCount(count + 1);
    // console.log(count);
  };
  const decreamenHandler = () => {
    setCount(count - 1);
    // console.log(count);
  };
  const resetHandler = () => {
    setCount(0);
    // console.log(count);
  };
  return (
    <div className="container">
      <h2>{count}</h2>
      <div className="buttons-container">
        <button onClick={decreamenHandler}>-</button>
        <button onClick={resetHandler}>Reset</button>
        <button onClick={increamentHandler}>+</button>
      </div>
    </div>
  );
};
export default Counter;
