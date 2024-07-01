import { CDN_URL } from "../utils/constants";
const ItemList = ({items})=> {

    return (
        <div>
         {items.map((item)=>(
            <div className="text-left py-2 font-normal text-sm flex justify-between" key={item.card.info.id}>

                <div className="w-9/12">
                <span className="font-bold">{item.card.info.name}</span>
                               
                <h1 className="font-bold">₹{item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</h1>
                
                <p>{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute py-16 px-8">
                    <button className="bg-white w-20 h-8 text-green-400 font-bold rounded-sm">ADD</button>

                </div>
                    <img className= "w-full h-24"src={CDN_URL+item.card.info.imageId}></img>
                    
                </div>
            </div>

         ))}
        </div>
    )
}

export default ItemList;