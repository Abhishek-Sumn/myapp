import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      
      <a href="/">
        <img
          className="icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQX3qNsMMyLxmIRDO96uEIPe5cW9TJsH4vI1Up188LETqqrUMuRQ8yd3bD0gSasrz_9U&usqp=CAU"
          alt=""
        />
      </a>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
