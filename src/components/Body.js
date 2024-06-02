import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";


const Body = () => {
    //Local state Varairble - Super powerful varaible
    //setlistOfResturants is function to change/modify the listOfResturants react varaible
    const [listOfResturants,setlistOfResturants] = useState([]);

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
    };
    
    if(listOfResturants.length == 0){
      // return <h1>Loading...</h1>
      return <Shimmer/>
    }
    return (<div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                //Filter logic
                const filteredList = listOfResturants.filter((res)=>
                    res.info.avgRating>4);
                setlistOfResturants(filteredList);
             console.log(filteredList);
            }}>Top Rated Resturants</button>
            </div>
        <div className="res-container">
            {listOfResturants.map((restaurant) => 
                (<ResturantCard key = {restaurant.info.id} resData = {restaurant}/>))}

        </div>
    </div>

    );
}
export default Body;