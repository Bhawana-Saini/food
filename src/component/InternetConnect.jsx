import React, { useEffect, useState } from 'react'
import conntection from '../asserts/image/connectionerror.png'

const NoInternetConnection = (props) => {
    // state variable holds the state of the internet connection
    const [isOnline, setOnline] = useState(true);

    // On initization set the isOnline state.
    useEffect(()=>{
        setOnline(navigator.onLine)
    },[])

    // event listeners to update the state 
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });

    // if user is online, return the child component else return a custom component
    if(isOnline){
    return(
        props.children
    )
    } else {
        return(<div className="internet">
        <img src={conntection} alt="logo" style={{ height: "240px", width: "260px" }} />
        <h1 style={{color:"white"}}>Oops,seems like you're offline!</h1>
        <p style={{color:"white"}}>This page cannot be displayed at the moment. Try once again later when your internet connection improves!</p>
    </div>)
    }
}

export default NoInternetConnection;