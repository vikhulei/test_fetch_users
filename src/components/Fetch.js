import React, {useState, useEffect} from "react"

const Fetch = () => {

    const [fetchedData, setFetchedData] = useState("")
    const [fetchedUser, setFetchedUser] = useState([])

    const fetchData = () => {
        return fetch("https://randomuser.me/api")
        .then(data => data.json())
        .then(data => data.results)
    }

const getUser = () => {
    fetchData()
    .then(data => setFetchedUser(prev => [...prev, ...data]))
}

useEffect(() => {
    fetchData()
    .then(data => setFetchedData(JSON.stringify(data)))
}, [])

    return <div>
        <p>{fetchedData}</p>
        <button onClick={getUser}>Get User</button>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {fetchedUser.map((val, idx) => {
                return <div key={idx} >
                <p>{val.name.last}</p>
                <img src={val.picture.large}/>
                </div>
                })}
        </div>
    </div>
}

export default Fetch