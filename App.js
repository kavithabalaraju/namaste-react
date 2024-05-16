
import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
    <div className="header">
        <div className="log-container">
                <img className = "logo" src = "https://images.unsplash.com/photo-1615719413546-198b25453f85?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
           </div> 
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

    </div>)
}
const AppLayout = () => {
    return (<div className = "app">
        <Header/>
    </div>
    

    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
