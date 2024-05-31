import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    //Local state Varairble - Super powerful varaible
    const [listOfResturants] = useState([{
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

    }]);
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
                listOfResturants = listOfResturants.filter((res)=>
                    res.info.avgRating>4);
             console.log(listOfResturants);
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