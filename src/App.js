import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter"
import Fetch from "./components/Fetch"
import Count from "./components/Count"


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    }
  }

  render() {

    return <div className="App">
      <Count counter = {this.state.counter}/>
    </div>
  }
}


//   const [init, setInit] = useState(2)

// return (
//   <div className="App">
//     <Fetch />
//   </div>
// )

// }

// export default App;

