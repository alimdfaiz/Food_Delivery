import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
// import resObj from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import QualityContainer from "./QualityContainer";
import { scroller } from "react-scroll";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleScroll = () =>{
    scroller.scrollTo('res-list',{
      smooth:true,
      duration: 560,
      offset : -170
    })
  }

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING<"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  // if(listOfRestaurant.length===0){
  //     return <Shimmer/>
  // }
  const onlineStatus=useOnlineStatus();
  if ( onlineStatus === false)
    return (
      <h1>Look's like you're offline.Please check your internet connection</h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
    <QualityContainer onClicker={handleScroll}/>
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 ">
          <input 
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-1 ml-1 bg-yellow-300 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
        <button
          className="filter_btn bg-yellow-300 rounded-lg py-1 px-4"
          onClick={() => {
            const filter = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurant(filter);
          }}
        >
          Top Rated Restaurant
        </button>
        </div>
        
      </div>
      <div id="res-list" className="res-container flex flex-wrap rounded-lg   ">
        {filteredRestaurant.map((el) => {
          return (
            <Link key={el.info.id} to={"/restaurant/" + el.info.id}>
              <RestaurantCard resData={el} />
            </Link>
          );
        })}
      </div>
    </div>
    </>
  );
};
export default Body;
