import React from 'react';

class CounterAppClass extends React.Component {

  //#region Component class functions

  componentDidMount() {
    console.log("I will be called after component is mounted");
  }

  componentDidUpdate() {
    console.log("I will be called after component is updated");
  }

  componentWillUpdate() {
    console.log("I will be called before component is updated");
  }

  //#endregion

  state = {
    count: 0,
    stepSize: 1
  }

  addToCount = (stepSize) => () => this.setState({ count: this.state.count + stepSize });

  render() {
    return (
      <div className="border padding-20">
        <h1>{this.props.title}</h1>
        <h2 className="value make-center">{this.state.count}</h2>
        <div className="make-center">

          <button onClick={this.addToCount(this.state.stepSize)}>Increment</button> &nbsp;&nbsp;
        <button onClick={this.addToCount(-this.state.stepSize)}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default CounterAppClass;