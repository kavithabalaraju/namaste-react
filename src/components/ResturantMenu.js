import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
const ResturantMenu = ()=>{

    const [resInfo, setResInfo] = useState(null);

   useEffect(()=>{
    fetchMenu();
   },[]
   
);
const fetchMenu = async () => {
const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4747785&lng=78.3102918&restaurantId=535834&catalog_qa=undefined&submitAction=ENTER");
const json = await data.json();
console.log(json);
setResInfo(json.data);

};
if(resInfo == null){
return <Shimmer/>
}
const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

const menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
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