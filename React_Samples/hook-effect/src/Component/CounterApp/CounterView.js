import React from 'react';

const generateRandomColor = () => {
  // const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  // let color = '';
  // for (let i = 0; i < 6; i++) {
  //   color += digits[Math.floor((Math.random() * 16))];
  // }
  // console.log(color);
  // return '#' + color;

  let color = '#';
  color += Math.floor(Math.random() * 0xFFFFFF).toString(16); 
  return color
}

const CounterView = (props) => {

  const { count, stepSize, addToCount } = props;

  return (
    <div style={{ background: generateRandomColor() }}>
      <h2 className="value make-center">{count}</h2>
      <div className="make-center">
        <button onClick={addToCount(stepSize)}>Increment</button> &nbsp;&nbsp;
        <button onClick={addToCount(-stepSize)}>Decrement</button>
      </div>
    </div>
  );
}


// React.memo it will get only re-rendered when props are changed
// i.e. { count, stepSize, addToCount } if any of this is changed
// so that change of state in parent component will not re-render me :=)
export default React.memo(CounterView);