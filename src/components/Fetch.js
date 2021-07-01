import React, {useState, useEffect} from "react"

const Fetch = () => {

const [fData, setFData] = useState("")
const [userData, setUserData] = useState([])

const fetchData = () => {
    return fetch("https://randomuser.me/api")
    .then(data => data.json())
    .then(data => data.results)
}

const showUser = () => {
    fetchData()
    .then(data => setUserData(prev => [...prev, ...data]))
    .then(() => console.log(userData))
}

useEffect(() => {
    fetchData()
    .then(data => setFData(JSON.stringify(data)))
}, [])

return <div>
    <h1>This is fetched data:</h1>
    <p>{fData}</p>
    <button onClick={showUser}>Show User</button>
    <div>
        {userData.map((value, idx) => {
            return <div key={idx}>
                <p>{`${value.name.title} ${value.name.first} ${value.name.last}`}</p>
                <img src={value.picture.large}/>
            </div>
        })}
    </div>
</div>
}

export default Fetch