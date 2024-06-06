import { CDN_URL} from "../utils/constants";
const ResturantCard = (props) => {
    const {resData} = props;
    console.log(resData);
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;

    return (<div className="resCard">
        <img className="rest-logo" alt = "res-logo" src={ CDN_URL+cloudinaryImageId}></img>
        
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRating} Stars</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime} minutes</h5>
    </div>);

}
export default ResturantCard;