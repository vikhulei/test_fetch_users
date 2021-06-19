import React from "react"

class FetchData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedData: [],
            userInformation: [],
            usersInfos: [],
        }
        this.fetchData = this.fetchData.bind(this)
        this.loadData = this.loadData.bind(this)
        this.showUser = this.showUser.bind(this)
        this.addUsers = this.addUsers.bind(this)
        this.getFullUserInfo = this.getFullUserInfo.bind(this)
        this.getUserPicture = this.getUserPicture.bind(this)
    }


    fetchData() {
        return fetch("https://randomuser.me/api")  
        .then(response => response.json()
        )
        .catch(err => {
            console.error(err)
        })
    }

    loadData() {
       this.fetchData()
        .then(data => data.results)
        .then(data => this.setState({fetchedData: data}))
    }

    showUser() {
        this.fetchData()
        .then(data => {this.setState({userInformation: data.results})
        })
    }

    addUsers() {
        this.fetchData()
        .then(data => data.results)
        .then(data => 
            {
                this.setState({usersInfos: [...this.state.usersInfos, data[0]] })
            })
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
            <button onClick={this.loadData}>Load Data</button>
            <button onClick={this.showUser}>Show User</button>
            <button onClick={this.addUsers}>Add Users</button>
            <div>
                {this.state.fetchedData.map((item, idx) => (
                    <p key={idx}>{JSON.stringify(item)}</p>
                ))}
            </div>
            <div>
                {this.state.userInformation.map((userInfo, idx) => (
                    <div key={idx}>
                        <p>{this.getFullUserInfo(userInfo)}</p>
                        <img src={this.getUserPicture(userInfo)}/>
                    </div>
                ))}
            </div>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {this.state.usersInfos.map((userInfo, idx) => (
                    <div key={idx} style={{marginRight: "10px"}}>
                        <p>{this.getFullUserInfo(userInfo)}</p>
                        <img src={this.getUserPicture(userInfo)}/>
                    </div>
                ))}
            </div>
        </div>
    }
}

export default FetchData