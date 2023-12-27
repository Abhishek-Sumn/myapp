import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState({});

  //fetch data
  useEffect(() => {
    getRestaurantInfo();
  },[]);

  async function getRestaurantInfo() {
    const data = await fetch(
      "http://localhost:8080/restaurant/info/"+id
    );

    const json = await data.json();
    setRestaurant(json);
    console.log(json)
  }
  return restaurant;
};

export default useRestaurant;