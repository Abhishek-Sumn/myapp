import { useParams } from "react-router-dom";
import { IMG_CDN_URL, IMG_MENU_URL } from "../content";
import useRestaurant from "../../utils/useRestaurant";
import useResturentMenu from "../../utils/useRestaurantMenu";
import Shimmer from "../Hero/Shimmer";
import MenuError from "./MenuError";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useRestaurant(id);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const resInfo = useResturentMenu(id);

  if (resInfo === null) return <Shimmer />;

  let  itemCards  = resInfo;
  
  return (
    <div class="">
      <div class="flex justify-between px-[11%] pt-[2%] pb-2">
        <img
          class="h-26 rounded-xl"
          src={IMG_MENU_URL + restaurant.cloudinaryImageId}
          alt="Res Img"
        />
        <div class="p-8">
          <h2 class="swiggybold">{restaurant.name}</h2>

          <h3>{restaurant.city}</h3>
          <span class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="green"
              aria-hidden="true"
              class="w-4 h-5 mr-1"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              ></path>
            </svg>

            <h1 class="text-green">{restaurant.avgRating}</h1>
          </span>
          <h3>{restaurant.costForTwoMessage}</h3>
        </div>
      </div>

      {itemCards.length === 0 ? (
        <MenuError />
      ) : (
        <div>
          <h1
            style={{ fontWeight: "bold", fontSize: "30px", marginLeft: "15%" }}
          >
            Recommended ({itemCards.length})
          </h1>

          {itemCards.map((ele) => {
            return (
              <div
                key={ele.card.info.id}
                class="flex flex-wrap ml-[10%] mr-[10%]"
              >
                <div className="m-5  w-[20%]" style={{ flex: "2" }}>
                  <h2 className="text-bold ">{ele.card.info.name}</h2>

                  {"  ₹ "}
                  {ele.card.info.price / 100 ||
                    ele.card.info.defaultPrice / 100}
                  <p style={{ fontSize: "11px", color: "gray" }}>
                    {ele.card.info.description}
                  </p>
                </div>
                <div className="  m-5" style={{ position: "relative" }}>
                  <img
                    class="w-[118px] h-[96px]"
                    src={IMG_CDN_URL + ele.card.info.imageId}
                    alt=""
                  />
                  <button
                    className="border border-grey-200 w-[90px] h-[33px] 
                    font-bold text-green-700 text-xs
                    bg-white ml-3.5 text-center z-40 
                    hover:shadow-md"
                    onClick={() => addFoodItem(ele.card.info)}
                  >
                    ADD
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
