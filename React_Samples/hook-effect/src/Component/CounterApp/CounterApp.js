import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './CounterApp.css';
import CounterView from './CounterView';

const CounterApp = (props) => {

  const [count, setCount] = useState(0);
  const [anything, setAnything] = useState(10);

  const { title } = props;
  const stepSize = 1;
  

  // it's callback will be called after update in state
  // second parameter is dependecy array.
  // if empty array it wiil be called only once at start.
  // if we provide any varible in array then on change of that only it will be called.

  // useEffect(() => {
  //   console.log("state is changed");
  // });  

  useEffect(() => {
    console.log("count is changed")
  }, [count]);

  
  // const addToCount = (stepSize) => () => setCount(count + stepSize);
  // const addToAnything = () => () => setAnything(anything + 10);
  
  const addToCount = useCallback((stepSize) => () => setCount(count + stepSize), [count]);
  const addToAnything = useCallback(() => () => setAnything(anything + 10),[anything]);

  return (
    <div className="border padding-20">
      <h1>{title}</h1>
      <CounterView
        count={count}
        stepSize={stepSize}
        addToCount={addToCount} 
      />
      <button onClick={addToAnything()}>anything</button>
    </div>
  );
}

// to set type of value of props
CounterApp.propTypes = {
  title: PropTypes.string.isRequired
}

export default CounterApp;
