
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
const ResturantCard = (props) => {
    const {resName, cuisines} = props;
    console.log(props);
    return (<div className="resCard">
        <img className="rest-logo" alt = "res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/inzruzexryj1attuojwi"></img>
        <h3>{resName}</h3>
        <h4>{cuisines}</h4>
        <h5>4.4 Stars</h5>

    </div>);

}
const Body = () => {
    return (<div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        <ResturantCard resName = "Meghana Foods" cuisines = "South Indian biryani, Soups"/> 
        <ResturantCard resName = "KFC" cuisines = "chiken, burger "/> 

        </div>
    </div>

    );
}

const AppLayout = () => {
    return (<div className = "app">
        <Header/>
        <Body/>
    </div>
    

    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
