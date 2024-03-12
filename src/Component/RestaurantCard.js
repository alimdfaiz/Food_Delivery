import { CDN_LINK } from "../utils/constants";
import { BsFillStarFill } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";
const RestaurantCard=(props)=>{
    const {resData} = props
    const{cloudinaryImageId,cuisines,avgRating,name,costForTwo}=resData?.info
    
    return(
        <div className="res-card w-[300px] min-h-[370px] shadow-lg text-yellow-600 p-4 m-4  mb-10 bg-white rounded-lg hover:shadow-yellow-600 transition:ease-in-out delay-50 hover:scale-105 duration-200">
<img  className ="rounded-lg w-[280px] h-[200px]"src= {CDN_LINK + cloudinaryImageId}/>
<h3 className="font-bold pt-2 pb-1 text-xl line-clamp-1">{name}</h3>
<h4 className="mb-4 ">{cuisines.join(", ")}</h4>
<div className="flex justify-between mb-2">
      <h4
          style={
            avgRating < 4
              ? { backgroundColor: "#f7084e" }
              : { backgroundColor: "#00ad1d" }
          } 
          className="p-2 mb-4 text-white font-bold rounded-md flex items-center gap-2"
        > 
        
          {avgRating ? avgRating : "--"}
          <BsFillStarFill  />
        </h4>
      <h4 className="mt-2 ml-5 font-bold"><FaWalking className="ml-3"/>{resData.info.sla.lastMileTravelString} </h4>
      <h4 className="mt-2  font-bold"> {costForTwo} </h4>

      </div>
      <span className="pt-3 text-base font-bold"> {resData.info.sla.deliveryTime} </span><span className="pt-3 text-base">minutes till delivery</span>

        </div>
    )
}
export default RestaurantCard;