import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
const Hero = () => {
  const [SearchTxt, setSearchTxt] = useState("");


  return (
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
       
        <button>Search</button>
      </div>

      <RestaurantCard />
    </div>
  );
};

export default Hero;
