import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setisLoggedIn] = useState(true);

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

        <li>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>

        <li>Contact</li>
        <li>Cart</li>
      </ul>
      <div className="btndiv">
        {isLoggedIn ? (
          <button className="logout " onClick={() => setisLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button className="login " onClick={() => setisLoggedIn(1)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
