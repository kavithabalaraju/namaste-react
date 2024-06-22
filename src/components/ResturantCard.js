import { CDN_URL} from "../utils/constants";
const ResturantCard = (props) => {
    const {resData} = props;
    console.log(resData);
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;

    return (<div className="p-4 m-4 w-[230px] rounded-lg bg-gray-200 hover:bg-gray-300">
        <img className="h-40 w-[230px] rounded-lg" alt = "res-logo" src={ CDN_URL+cloudinaryImageId}></img>
        
        <h3 className="font-bold py-3">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating} Stars</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime} minutes</h5>
    </div>);

}
export default ResturantCard;