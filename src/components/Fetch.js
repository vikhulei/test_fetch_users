import React from "react"

class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchData: "",
            fullName: "",
            picture: ""
        }
    }

    componentDidMount() {
        
        fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => {
            let name = data.results[0].name
            let fullName = `${name.title} ${name.first} ${name.last}`
            let pict = data.results[0].picture.large
            this.setState({fetchData: JSON.stringify(data.results[0])})
            this.setState({fullName: fullName})
            this.setState({picture: pict})
        })
    }

    render () {
        return <div>
            <h1>{this.state.fullName}</h1>
            <img src={this.state.picture} alt="picture"></img>
            <p>{this.state.fetchData}</p>
        </div>
    }
}

export default FetchData