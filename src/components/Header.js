import { useState, useEffect} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import EmojiPicker from "emoji-picker-react";

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
    <div className="flex justify-between bg-pink-100 h-32 shadow-lg sm:bg-yellow-50 lg:bg-green-100">
        <div className="log-container">
                <img className = "w-40 h-32" src = {LOGO_URL}/>
           </div> 
            <div className="flex items-center">
                <ul className="flex m-4 p-10">
                    <li className="px-4">Online Status:{}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4">
                    <Link to="/about">About Us</Link>
                
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                        </li>
                        <li className="px-4"> 
                            <Link to = "/grocery">Grocery</Link>
                        </li>
                    <li className="px-4">Cart</li>
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