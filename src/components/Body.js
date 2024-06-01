import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";


const Body = () => {
    //Local state Varairble - Super powerful varaible
    //setlistOfResturants is function to change/modify the listOfResturants react varaible
    const [listOfResturants,setlistOfResturants] = useState(resList);

    useEffect(()=>{
        fetchData();
        console.log("use effect called");

    },[]);
    const fetchData = async ()=>{

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistOfResturants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }
    
    let listOfResturantsJS = [{
        "info": {
            "id": "11091",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 3.8,
            "sla": {
              "deliveryTime": 33
            },
        },
    },
    {
        "info": {
            "id": "659668",
            "name": "UBQ by Barbeque Nation",
            "cloudinaryImageId": "ffe4084febdec52732dffd3624f4e6c1",
            "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
              ],
            "avgRating": 4.5,
            "sla": {
              "deliveryTime": 30
            },
        },

    },
];
    return (<div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                //Filter logic
                const filteredList = listOfResturants.filter((res)=>
                    res.info.avgRating>4);
                setlistOfResturants(filteredList);
             console.log(filteredList);
             console.log("button is clicked");
            }}>Top Rated Resturants</button>
            </div>
        <div className="res-container">
            {listOfResturants.map((restaurant) => 
                (<ResturantCard key = {restaurant.info.id} resData = {restaurant}/>))};

        </div>
    </div>

    );
}
export default Body;