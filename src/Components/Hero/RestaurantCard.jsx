import React from "react";
import "./RestaurantCard.css";
import { restaurantList } from "../content.jsx";
import { IMG_CDN_URL } from "../content.jsx";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="Burger King" />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
