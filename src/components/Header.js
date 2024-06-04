import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = ()=>{
    const [btnReactName,setBtnReactName] = useState("Login");

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