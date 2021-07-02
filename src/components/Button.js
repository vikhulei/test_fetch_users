import React from "react"

const Button = ({increment, decrement}) => {
    return <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
}

export default Button