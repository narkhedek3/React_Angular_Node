import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CounterApp.css';

// way to assign values to variables from array.
const getArray = () => {
  let arr = [1, 2];
  return arr;
}
const [num1, num2] = getArray();
console.log(num1, num2);

const CounterApp = (props) => {

  // state useState function return array so that we can assign values as follows
  // const [num1, num2] = [1, 2];
  const [count, setCount] = useState(0);
  // Destrucurization
  const { title } = props;
  const stepSize = 1;

  // const increment = () => setCount(count + 1);

  // const decrement = () => setCount(count - 1);

  // addToCount again returning one function so that we can pass argument without calling function;
  const addToCount = (stepSize) => () => setCount(count + stepSize);



  return (
    <div className="border padding-20">
      <h1>{title}</h1>
      <h2 className="value make-center">{count}</h2>
      <div className="make-center">
        {/* <button onClick={increment}>Increment</button> &nbsp;&nbsp;
        <button onClick={decrement}>Decrement</button> */}

        <button onClick={addToCount(stepSize)}>Increment</button> &nbsp;&nbsp;
        <button onClick={addToCount(-stepSize)}>Decrement</button>
      </div>
    </div>
  );
}

// to set type of value of props
CounterApp.propTypes = {
  title: PropTypes.string.isRequired
}

export default CounterApp;
