import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../content";
import useRestaurant from "../../utils/useRestaurant";
import useResturentMenu from "../../utils/useRestaurantMenu";
import { useEffect } from "react";
import Shimmer from "../Hero/Shimmer";
import MenuError from "./MenuError";
let RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  const resInfo = useResturentMenu(id);

  if (resInfo === null) return <Shimmer />;

  let { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  return (
    <div class="">
      <h1 class="font-bold ">Restaurant {id}</h1>
      <h2>{restaurant.name}</h2>
      <img
        class="h-26"
        src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        alt="Res Img"
      />
      <h3>{restaurant.city}</h3>
      
      <h3>{restaurant.avgRating}</h3>
      <h3>{restaurant.costForTwoMessage}</h3>

      {itemCards === undefined ? (
        <MenuError />
      ) : (
        <div>
          <h1
            style={{ fontWeight: "bold", fontSize: "30px", marginLeft: "15%" }}
          >
            Recommended ({itemCards.length})
          </h1>

          {itemCards.map((ele) => {
            {
              /* console.log("ele",ele) */
            }
            return (
              <div key={ele.card.info.id} class="flex flex-wrap ">
                <div className="m-5  w-[20%]" style={{ flex: "2" }}>
                  {/* {ele.card.info.name} */}
                  <h2 className="text-bold ">{ele.card.info.name}</h2>

                  {"  ₹ "}
                  {ele.card.info.price / 100 ||
                    ele.card.info.defaultPrice / 100}
                  <p style={{ fontSize: "11px", color: "gray" }}>
                    {ele.card.info.description}
                  </p>
                </div>
                <div className="  m-5" style={{ position: "relative" }}>
                  <button
                    className="shadow-md"
                    /* onClick={() => handleAddItem(ele.card.info)} */
                  >
                    add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default RestaurantMenu;
