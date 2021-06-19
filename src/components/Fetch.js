import React from "react"

class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedData: [],
            fullName: [],
        }
        this.fetchData = this.fetchData.bind(this)
        this.showUser = this.showUser.bind(this)
        this.getFullUserInfo = this.getFullUserInfo.bind(this)
        this.getUserPicture = this.getUserPicture.bind(this)
    }

    componentDidMount() {
        fetch("https://randomuser.me/api")  
        .then(response => response.json()
        )
        .then(data =>                
                this.setState({fetchedData: data.results})
                )
        .catch(err => {
            console.error(err)
        })
    }

    fetchData() {
        fetch("https://randomuser.me/api")  
        .then(response => response.json()
        )
        .then(data => 
            this.setState({fetchedData: 
                data.results})
        )
        .catch(err => {
            console.error(err)
        })
    }

    showUser() {
        fetch("https://randomuser.me/api")
        .then(response => response.json())
        .then(data => this.setState({fullName: data.results})
         )
    }

    getFullUserInfo(userInfo) {
        const {name: {title, first, last}} = userInfo
        return `${title} ${first} ${last}`
    }

    getUserPicture(userInfo) {
        const {picture: {large}} = userInfo
        return large
    }


    render () {
        return <div>
            <button onClick={this.fetchData}>Load Data</button>
            <button onClick={this.showUser}>Show User</button>
            <div>
                {this.state.fetchedData.map((item, idx) => (
                    <p key={idx}>{JSON.stringify(item)}</p>
                ))}
            </div>
            <div>
                {this.state.fullName.map((userInfo, idx) => (
                    <div key={idx}>
                        <p>{this.getFullUserInfo(userInfo)}</p>
                        <img src={this.getUserPicture(userInfo)}/>
                    </div>
                ))}
            </div>
        </div>
    }
}

export default FetchData