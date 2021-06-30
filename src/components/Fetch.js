import React, {useState, useEffect} from "react"
import axios from "axios"


const Fetch = () => {

const [fetchedData, setFetchedData] = useState()

useEffect(() => {
    axios.get("https://randomuser.me/api")
    .then(data => data.data.results)
    .then(data => data.map(val => val))
    .then(data => setFetchedData(JSON.stringify(data)))
}, [])

    return <div>
        <h1>Hello from Fetch</h1>
         <p>{fetchedData}</p> 
    </div>
}

export default Fetch