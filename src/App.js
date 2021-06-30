import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter"
import Fetch from "./components/Fetch"


const App = () => {
  const [init, setInit] = useState(2)

return (
  <div className="App">
    <Fetch />
  </div>
)

}

export default App;

