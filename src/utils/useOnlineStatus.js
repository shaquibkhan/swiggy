import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true);
    
    useEffect(()=>{
        window.addEventListener("offline", (event) => {
            // console.log("The network connection has been lost.");
            setOnlineStatus(false);
          })
    
          window.addEventListener("online", (event) => {
            // console.log("You are back online.");
            setOnlineStatus(true);
          })
    },[])
  return onlineStatus
}

export default useOnlineStatus