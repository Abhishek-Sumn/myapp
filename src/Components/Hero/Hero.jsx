import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "./Hero.css";
import Shimmer from "./Shimmer";

function filterData(searchTxt, restaurantList) {
  const filterData = restaurantList.filter((restaurant) =>
    restaurant.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
  );
  return filterData;
}

const Hero = () => {
  const [allResaturants,setallResaturants] = useState([]);
  const [SearchTxt, setSearchTxt] = useState("");
  const [filteredResataurants, setfilteredResataurants] = useState([]);

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
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    const resData = await checkJsonData(json);


    setallResaturants(resData);
    setfilteredResataurants(resData);
  }

  return allResaturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="Hero">
        <div className="search-container" >
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
              // Filter the restraunt cards and update the UI
              // searchText
              const filteredResataurants = allResaturants.filter((res) =>
                res.info.name.toLowerCase().includes(SearchTxt.toLowerCase())
              );

              setfilteredResataurants(filteredResataurants);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="restaurant-list">
        {filteredResataurants?.map((restaurant) => {
          return <RestaurantCard {...restaurant?.info} />;
        })}
      </div>
    </>
  );
};

export default Hero;
