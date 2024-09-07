import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurent] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("This will execute after loading the component");
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9808742&lng=80.2402866&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("API Invoked");
    //Optional Chaining
    setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  //Conditional Rendering
  return listOfRestaurents == 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="serach">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button onClick={() => {
              const filteredRestaurant = listOfRestaurents.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilteredRestaurant(filteredRestaurant);
            }
          }>Search</button>
        </div>  
        <button 
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList); 
          }}>Top Rated Restaurent
        </button>
      </div>
      <div className="rest-container">
        {
          filteredRestaurant.map((restaurent) => (<RestaurantCard key={restaurent.info.id} resData={restaurent}/>))
        }
      </div>
    </div>
  )
}

export default Body;