import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";

const RestaurentMenu = () => {

  const [resInfo, setresInfo] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const json = await data.json();
      setresInfo(json?.data)
    } catch(error) {
      console.error("Error fetching menu:", error);
    }
  }
  if (resInfo == null) {
    return <Shimmer />;
  }

  const {name, cuisines} = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { itemCards } = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card || [];
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h2>Menu</h2>
      <ul>
        {
          itemCards?.map( (item,index) => <li key={index}>{item.card.info.name} - ₹{(item.card.info.price / 100).toFixed(2)}</li> )
        }
      </ul>
    </div>
  );
};

export default RestaurentMenu;