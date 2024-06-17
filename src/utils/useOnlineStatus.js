import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
    const[internetStatus, setInternetStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline", (e) => {
            setInternetStatus(false)
          })
          
          window.addEventListener("online", (e) => {
            setInternetStatus(true)
            console.log("online");
          });

    },[])
    // internetStatus boolean value

    return internetStatus;
}
export default useOnlineStatus;