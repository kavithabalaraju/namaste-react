import { useState, useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
const Header = ()=>{
    const [btnReactName,setBtnReactName] = useState("Login");
    console.log("Header component render");

   //Use useEffect takes two parameters one=>callback fun and second=>dependancy array
   //if no dependancy array => useEffect is called on every render of comp(Header)
   //if dependancy array is empty=>useEffect is called initial render(just only once)
   //if dependancy array is not empty=>useEffect is called when dependacy array is updated

   useEffect(()=>{
    console.log("useEffect called"); 
   },[btnReactName])

    return(
    <div className="header">
        <div className="log-container">
                <img className = "logo" src = {LOGO_URL}/>
           </div> 
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="btnName" onClick={()=>{
                        //Toogle function if btnReactName is login then change to logut otherwise change to login once again
                        btnReactName == "Login"
                        ?setBtnReactName("Logout")
                        :setBtnReactName("Login")
                        console.log(btnReactName);

                    }

                    }>{btnReactName}</button>
                </ul>
            </div>

    </div>)
}

export default Header;