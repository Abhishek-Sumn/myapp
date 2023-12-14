
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../content";
import useRestaurant from "../../utils/useRestaurant";


const RestaurantMenu = () => {
  const {id} = useParams();

  const restaurant = useRestaurant(id);

  return (
    <div class="w-[200px]"> 
      
      <h1 class="font-bold ">Restaurant {id}</h1>
      <h2>{restaurant.name}</h2>
      <img class="h-26" 
      src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="Res Img" /> 
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.avgRating}</h3>
      <h3>{restaurant.costForTwoMessage}</h3>

  </div>
  );
};

export default RestaurantMenu;
