import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState({});

  //fetch data
  useEffect(() => {
    getRestaurantInfo();
  },[]);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://api.abhisheksuman.me/restaurant/"+id
    );

    const json = await data.json();
    setRestaurant(json);
   
  }
  return restaurant;
};

export default useRestaurant;
