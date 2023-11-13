import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../content";
import "./Hero.css";

function filterData(searchTxt, restaurantList) {
  const filterData = restaurantList.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
  return filterData;
}

const Hero = () => {
  const [SearchTxt, setSearchTxt] = useState("");
  const [restaurantData, setRestaurantData] = useState(restaurantList);

  return (
    <>
      <div className="Hero">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={SearchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />

          <button
            onClick={() => {
              const data = filterData(SearchTxt, restaurantList);
              setRestaurantData(data);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="restaurant-list">
        {restaurantData.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Hero;
