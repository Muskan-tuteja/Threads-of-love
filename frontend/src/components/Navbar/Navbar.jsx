import React, { useState } from "react";
import "./Navbar.css";
import { assests } from "../../assets/assests";
const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assests.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <b>Home</b>
        </li>
        <li
          onClick={() => setMenu("Rakhi Collection")}
          className={menu === "Rakhi Collection" ? "active" : ""}
        >
          Rakhi Collection
        </li>
        <li
          onClick={() => setMenu("Trending Now")}
          className={menu === "Trending Now" ? "active" : ""}
        >
          Trending Now
        </li>
        <li
          onClick={() => setMenu("Combo Offer")}
          className={menu === "Combo Offer" ? "active" : ""}
        >
          Combo Offer
        </li>
        <li
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assests.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assests.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
