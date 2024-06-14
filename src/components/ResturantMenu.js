import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useResturantMenu from "./useResturantMenu";

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
    console.log(menuItems);
    return  (
        <div className="restMenu">
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h1>Menu</h1>
        <ul>
            {
                //Map takes callback function
                menuItems.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)
            }
        </ul>
    </div>)
}

export default ResturantMenu;