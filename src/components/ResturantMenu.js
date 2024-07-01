import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

const ResturantMenu = ()=>{
   
const {resId} = useParams();
    console.log(resId);
    const resInfo = useResturantMenu(resId);
    console.log(resInfo);
if(resInfo == null){
return <Shimmer/>
}
const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
let menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
if(menuItems == null){
    menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
}

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]
        == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
   
    return  (
        <div className="text-center font-bold">
        <h1 className="text-2xl my-6">{name}</h1>
        <p className="text-lg">{cuisines.join(",")}</p>

        {categories.map((category)=><ResturantCategory key = {category?.card?.card?.title} data = {category?.card?.card}/>)
        }

       {/**  <h1>Menu</h1>
        <ul>
            {
                //Map takes callback function
                menuItems.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)
            }
        </ul> */}

    </div>)
}

export default ResturantMenu;