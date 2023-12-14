import React from "react";
import { IMG_CDN_URL } from "../content.jsx";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
}) => {
  return (
    <div class="w-[20%] p-2 m-2 shadow-lg transition ease-in-out hover:-translate-y-1 rounded-2xl">
      <img class="rounded-t-2xl" src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2 class="font-bold">{name}</h2>
      <h3 >{cuisines?.slice(0,2).join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>

    </div>
  );
};

export default RestaurantCard;

