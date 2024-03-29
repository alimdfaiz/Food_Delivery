import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu=()=>{
    const {resId} =useParams();
    const resInfo = useRestaurantMenu(resId);


    if(resInfo === null) return <Shimmer/>;
    const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
  
  const categories =
  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


    return(
        <div className="text-center">
            <h1 className="font-bold text-2xl ">{name}</h1>
            <h2 className="font-bold">{cuisines.join(", ")}-{costForTwoMessage}</h2>
            {categories.map((category) => (
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
        ))};

                
      
        </div>
    )
}
export default RestaurantMenu;