import React from "react"
import {useState} from "react"


const Counter = ({init}) => {
const [counter, setCounter] = useState(Number(init))

const decrement = () => {
    setCounter(counter - 1)
}

return <div>
    <button onClick={(() => {setCounter(counter + 1)})}>+</button>
    <h1>The Counter is {counter}</h1>
    <button onClick = {decrement}>-</button>
</div>

}

export default Counter