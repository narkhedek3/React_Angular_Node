import React from 'react';
import './App.css';
import CounterApp from './Component/CounterApp/CounterApp';
import CounterAppClass from './Component/CounterAppClassComponent/CounterAppClass';

function App() {
  return (
    <div className="fullscreen make-center">
      {
        // props 
      }
      <CounterApp title="Couter App [Functional Comp]...!!" />
      <CounterAppClass title="Couter App [Class Component]...!!" />
    </div>
  );
}

export default App;
