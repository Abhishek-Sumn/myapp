import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const emptyCart = () => {
    dispatch(clearCart());
  };
  return (
    
    <>
      <div> Cart - {cardItems[0]?.price/100}</div>
      <button
        onClick={() => {
          emptyCart();
        }}
        class="p-2 border bg-red-400 rounded-lg"
      >
        Clear Cart
      </button>
    </>
  );
};

export default Cart;
