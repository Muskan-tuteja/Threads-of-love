import React, { useState } from "react";
import "./Navbar.css";
import { assests } from "../../assets/assests";
import { Link } from "react-router-dom";

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={assests.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <b>Home</b>
        </Link>

        <a
          href="#rakhi-collection"
          onClick={() => setMenu("Collection")}
          className={menu === "Collection" ? "active" : ""}
        >
          Rakhi Collection
        </a>
        <a
          href="#rakhi-display"
          onClick={() => setMenu("Trending Now")}
          className={menu === "Trending Now" ? "active" : ""}
        >
          Trending Now
        </a>
        <a
          onClick={() => setMenu("Combo Offer")}
          className={menu === "Combo Offer" ? "active" : ""}
        >
          Combo Offer
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assests.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assests.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
