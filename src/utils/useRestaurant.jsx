import { useEffect, useState } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState({});

  //fetch data
  useEffect(() => {
    getRestaurantInfo();
  });

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6089845&lng=77.29420809999999&restaurantId=" +
        id
    );

    const json = await data.json();
    setRestaurant(json.data.cards[0].card.card.info);
  }

  return restaurant;
};

export default useRestaurant;