import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../../utils/useRestaurentMenu";

const RestaurentMenu = () => {

  // const [resInfo, setresInfo] = useState(null);
  const {resId} = useParams();

  const resInfo = useRestaurentMenu(resId)

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