import React, {useState, useEffect} from "react"
import axios from "axios"


const Fetch = () => {

const [fetchedData, setFetchedData] = useState([])
const [userInf, setUserInf] = useState([])
const [urlPic, setUrlPic] = useState("")

useEffect(() => {
    axios.get("https://randomuser.me/api")
    .then(data => data.data.results)
    .then(data => setFetchedData(JSON.stringify(data)))
}, []) 

const showUser = () => {
    const title = JSON.parse(fetchedData)
    console.log(title[0].name.title)
    setUserInf(title)
}

    return <div>
        <h1>Hello from Fetch</h1>
         <p>{fetchedData}</p>
         <button onClick={showUser}>Show User</button>
         <div>{userInf}</div>
    </div>
}

export default Fetch