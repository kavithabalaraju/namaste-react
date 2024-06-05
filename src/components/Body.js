import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {
    //Local state Varairble - Super powerful varaible
    //setlistOfResturants is function to change/modify the listOfResturants react varaible
    const [listOfResturants,setlistOfResturants] = useState([]);
    const [srchText,setSrchText] =  useState("");
    const [filterResturants,setFilterResturants] = useState([]);
    useEffect(()=>{
        fetchData();
        console.log("use effect called");

    },[]);
    const fetchData = async ()=>{

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //Optional Chaining
        setlistOfResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    //This is called conditional redering 

    // if(listOfResturants.length == 0){
    //   // return <h1>Loading...</h1>
    //   return <Shimmer/>
    // }

    //Use ternory operator to render

    return (listOfResturants.length == 0)?<Shimmer/>:(<div className="body">
        <div className="filter">
            <div className="search">
            <input type="text" placeholder="Enter Text" value={srchText} onChange={(e) =>{
                //React is rerendering the body component and its updating the input value only diff is input with new Ver DOM and OLD Ver DOM
              setSrchText(e.target.value);
               // each time body component is rerendering  when we type text in input 
               
            }

            }></input>
            <button className="search-btn" onClick={()=>{
            console.log(srchText);
            const searchList = listOfResturants.filter((res)=>res.info.name.toLowerCase().includes(srchText.toLowerCase()));
            console.log(searchList);
            setFilterResturants(searchList);

            }}>Search</button>
            <button className="filter-btn" onClick={()=>{
                //Filter logic
                const filteredList = listOfResturants.filter((res)=>
                    res.info.avgRating>4);
                setlistOfResturants(filteredList);           
             console.log(filteredList);
            }}>Top Rated Resturants</button>
            </div>
            </div>
        <div className="res-container">
            {filterResturants.map((restaurant) => 
                (<ResturantCard key = {restaurant.info.id} resData = {restaurant}/>))}

        </div>
    </div>

    );
}
export default Body;