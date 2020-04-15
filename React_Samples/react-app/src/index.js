import ReactDOM from 'react-dom'; 
import React from 'react';
import App from './App';

import './index.css';

//  html element from index.html
const reactAppElement = document.getElementById('react-app');


// const childElement = React.createElement('h2',null, 'Kiran');
// const element = React.createElement('h1', { className: 'make-center'}, 'Hello..', childElement);
// ReactDOM.render(element, reactAppElement);


//#region  we can write below function in another file to improve code readability
// function App() {
//   return (
//     <h1 className='make-center fullscreen'>
//       Hello
//       <h2>
//         Kiran...!
//       </h2>
//     </h1>
//   )
// }
//#endregion

ReactDOM.render(<App />, reactAppElement);

// ReactDOM.render(<h1>Hello</h1> , document.getElementById('react-app'))