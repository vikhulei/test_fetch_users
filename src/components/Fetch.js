import React, {useState, useEffect} from "react"


const Fetch = () => {

const [fetchedData, setFetchedData] = useState()

useEffect(() => {
    fetch("https://randomuser.me/api")
    .then(data => data.json())
    .then(data => data.results.map(val => val))
    .then(data => setFetchedData(JSON.stringify(data)))
}, [])

    return <div>
        <h1>Hello from Fetch</h1>
        <p>{fetchedData}</p>
    </div>
}

export default Fetch