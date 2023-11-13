import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    getRestaurantsList();
  }, []);

  async function getRestaurantsList() {
    let data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    let json = await data.json();

    async function checkJsonData(jsonData) {

      for (let i = 0; i < jsonData?.data?.cards.length; i++) {

        // initialize checkData for Swiggy Restaurant data
        let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    const resData = await checkJsonData(json);

    console.log(resData);
    setRestaurantData(resData);
  }

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
        {restaurantData?.map((restaurant) => {
          return (
            <RestaurantCard  {...restaurant?.info} />
          );
        })}
      </div>
    </>
  );
};

export default Hero;
