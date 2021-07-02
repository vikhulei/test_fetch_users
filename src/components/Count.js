import React from "react"
import Button from "./Button"

class Count extends React.Component {
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
        const counter = this.state.counter
        
        return <div>
            <Button increment = {this.increment} decrement={this.decrement}/>
            <h1>{counter}</h1>
        </div>
    }
}

export default Count