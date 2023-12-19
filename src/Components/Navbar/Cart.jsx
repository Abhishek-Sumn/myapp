import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import CartItems from "./CartItems";
import { IMG_CDN_URL } from "../content";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {cardItems.length === 0 ? (
        <div class="flex  justify-center ">
          <div>
            <img
              class="w-96 pt-5 mt-16"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              alt=""
            />
            <div class="ml-[30%] p-2 font-bold">Your cart is empty</div>
            <h2 class="font-medium mb-8">
              You can go to home page to view more restaurants
            </h2>
          </div>
        </div>
      ) : (
        ""
      )}
      {cardItems?.map((i) => {
        return <CartItems key={i.id} {...i} />;
      })}
      {cardItems.length === 0 ? (
        ""
      ) : (
        <button
          onClick={() => {
            emptyCart();
          }}
          class="p-2 border bg-red-400 rounded-lg"
        >
          Clear Cart
        </button>
      )}
    </>
  );
};

export default Cart;
