import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter"
import Fetch from "./components/Fetch"


class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    init: 1,
  }
}


  render () {
    const tst = this.state.init
    return <div className="App">
      <Counter init = {tst}/>
    </div>
  }
}

export default App


//   const [init, setInit] = useState(2)

// return (
//   <div className="App">
//     <Fetch />
//   </div>
// )

// }

// export default App;

