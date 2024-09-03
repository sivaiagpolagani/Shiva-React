import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restList from "../../utils/mockData";

const Body = () => {

  const [listOfRestaurents, setListOfRestaurent] = useState(restList);

  return (
    <div className="body">
      <div className="filter">
        <button 
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurent(filteredList); 
          }}>Top Rated Restaurent</button>
      </div>
      <div className="rest-container">
        {
          listOfRestaurents.map((restaurent) => (<RestaurantCard key={restaurent.info.id} resData={restaurent}/>))
        }
      </div>
    </div>
  )
}

export default Body;