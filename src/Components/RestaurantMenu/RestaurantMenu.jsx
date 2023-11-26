import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../content";
const RestaurantMenu = () => {
  const params = useParams();

  const [restaurant, setRestaurant] = useState({});

  useEffect(() => {
     
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=422449"
    );

    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
   
  }  
  return (
    <div>
      <h1>{console.log("hi")}</h1>
      <h1>Restaurant {params.id}</h1>
   {/*    <h2>{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} alt="Res Img" /> 
      <h3>{restaurant?.cards[0]?.card?.card?.city}</h3>
      <h3>{restaurant?.cards[0]?.card?.card?.info?.avgRating}</h3>
      <h3>{restaurant?.cards[0]?.card?.card?.costForTwoMessage}</h3> */}

  </div>
  );
};

export default RestaurantMenu;
