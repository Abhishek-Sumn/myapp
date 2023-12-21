import React from "react";

const MenuError = () => {
  return (
   
    <div class="h-screen flex items-center flex-col">
      <img
        src="https://raw.githubusercontent.com/Abhishek-Sumn/budget_calculator/master/close.png"
        alt="Restaurant Close"
        class="h-[40%]"
      />
      <h1 class='mt-5 swiggybold'>
        Uh Oh! Restaurant Currently Unavailable Plese Try another Restaurant.
      </h1>
    </div>
  );
};

export default MenuError;
