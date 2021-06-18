import React from 'react';
import './App.css';

class App extends React.Component {

constructor(props) {
  super(props);
    this.state = {
      counter: 0,
  }
  this.increment = this.increment.bind(this)
  this.decrement = this.decrement.bind(this)
}

increment() {
  this.setState({counter: this.state.counter + 1})
}

decrement() {
  this.setState({counter: this.state.counter - 1})
}

  render() {
  return <div className="App">
      <button onClick={this.increment} style = {{width: 100, height: 50, fontSize: 40}}>+</button>
      <h1>{this.state.counter}</h1>
      <button onClick={this.decrement} style = {{width: 100, height: 50, fontSize: 40}}>-</button>  
    </div>
  
  }
}

export default App;
