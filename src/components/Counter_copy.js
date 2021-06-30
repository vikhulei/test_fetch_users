import React, {useState} from 'react';
import '../App.css';

const Counter = () => {
const [counter, setCounter] = useState(0)

let increment = () => {
  return setCounter(prev => prev + 1)
}

let decrement = () => {
  return setCounter(prev => prev - 1)
}

return (
  <div className="App">
    <button style={{width: 100, fontSize: 30}} onClick={increment}>+</button>
    <h1>{counter}</h1>
    <button style={{width: 100, fontSize: 30}} onClick={decrement}>-</button>
  </div>
)

}

export default Counter;


// class Counter extends React.Component {

//   constructor(props) {
//     super(props);
//       this.state = {
//         counter: 0,
//     }
//     this.increment = this.increment.bind(this)
//     this.decrement = this.decrement.bind(this)
//   }
  
//   increment() {
//     this.setState({counter: this.state.counter + 1})
//   }
  
//   decrement() {
//     this.setState({counter: this.state.counter - 1})
//   }
  
//     render() {
//     return <div className="App">
//         <button onClick={this.increment} style = {{width: 100, height: 50, fontSize: 40}}>+</button>
//         <h1>{this.state.counter}</h1>
//         <button onClick={this.decrement} style = {{width: 100, height: 50, fontSize: 40}}>-</button>  
//       </div>
    
//     }
//   }
  