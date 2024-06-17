import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useResturantMenu = (resId)=>{
    console.log("inside useResturantMenu");
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
     fetchData();
    },[]
    
 );
const fetchData = async () => {
console.log(MENU_API + resId);
const data = await fetch(MENU_API + resId);
const json = await data.json();
console.log(json);
setResInfo(json.data);
};
return resInfo;
}
export default useResturantMenu;