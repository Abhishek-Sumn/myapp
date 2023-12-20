import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Bestoffer from "./Bestoffer";
import BestSmall from "../Hero/BestSmall";
const Hero = () => {
  const [allResaturants, setallResaturants] = useState([]);
  const [SearchTxt, setSearchTxt] = useState("burger");
  const [filteredResataurants, setfilteredResataurants] = useState([]);

  useEffect(() => {
    getRestaurantsList();
  }, []);

  async function getRestaurantsList() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
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
      <Bestoffer />
      <BestSmall />

      <div class=" ml-[80%] ">
      {/*   <div class=" relative mx-auto text-gray-600">
          <input
            class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
            value={SearchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            type="submit"
            class="absolute right-0 top-0 mt-5 mr-8"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              const filteredResataurants = allResaturants.filter((res) =>
                res.info.name.toLowerCase().includes(SearchTxt.toLowerCase())
              );

              setfilteredResataurants(filteredResataurants);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div> */}
      </div>

      <h1 class="font-extrabold text-xl leading-7 pl-[4%]  ml-[7%] pt-[3%] ">
        Top restaurant chains
      </h1>
      <div class="flex flex-wrap justify-center px-10">
        {filteredResataurants?.map((restaurant) => {
          return <RestaurantCard {...restaurant?.info} />;
        })}
      </div>
    </>
  );
};

export default Hero;
