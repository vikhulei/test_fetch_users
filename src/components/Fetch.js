import React from "react"

class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedData: "",
        }
        this.fetchData = this.fetchData.bind(this)
    }



    fetchData() {
        fetch("https://randomuser.me/api")  
        .then(response => response.json()
        )
        .then(
            data => this.setState(
                prevState => (
                    { fetchedData: prevState.fetchedData +
                    JSON.stringify(data.results)}
                )
                )

        )

        .catch(err => {
            console.error(err)
        })
    }


    render () {
        return <div>
            <button onClick={this.fetchData}>Load Data</button>
            <p>{this.state.fetchedData}</p>
        </div>
    }
}

export default FetchData