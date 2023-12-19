import React from "react";
import { IMG_CDN_URL } from "../content";
const CartItems = ({ id, imageId, isVeg, name, price }) => {
  return (
    <div class="flex flex-wrap gap-1 border border-grey-100 m-[2%]">
      <img
        class="h-[10%] w-[10%] p-2 rounded-sm shadow-lg "
        src={IMG_CDN_URL + imageId}
        alt={name}
      />

      <div class="mt-[1%]">
        <h1 >{name}</h1>
        <h2>Price - {price / 100}</h2>
      </div>
    </div>
  );
};

export default CartItems;
