export function filterData(searchTxt, restaurantList) {
    const filterData = restaurantList.filter((restaurant) =>
      restaurant.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())
    );
    return filterData;
  }