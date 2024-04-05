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

    console.log(data)
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

      <div class="  ">
        <div class=" relative mx-auto text-gray-600 ">
       
        <label
          class="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
          for="search-bar"
        >
          <input
            id="search-bar"
            placeholder="Search for your favourite restaurants"
            name="q"
            class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
            required=""
            value={SearchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            type="submit"
            class="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              const filteredResataurants = allResaturants.filter((res) =>
                res.info.name.toLowerCase().includes(SearchTxt.toLowerCase())
              );

              setfilteredResataurants(filteredResataurants);
            }}
          >
            <div class="flex items-center transition-all opacity-1">
              <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                Search
              </span>
            </div>
          </button>
        </label>
        </div>

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
