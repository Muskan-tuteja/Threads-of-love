import React from "react";
import "./Footer.css";
import { assests } from "../../assets/assests";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assests.logoo}></img>
          <p><b>
            Celebrate the bond of love and protection with Threds of love.
            Handpicked rakhi collections crafted with tradition, trust, and a
            touch of modern elegance — just for you.</b>
          </p>
          <div className="footer-social-icons">
            <img src={assests.facebook_icon} alt="" />
            <img src={assests.linkedin_icon} alt="" />
            <img src={assests.instagram_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-234-567-980</li>
            <li>contact@threadsoflove.com</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p>CopyRight © 2025 <span>Threadsoflove.com </span>- All rights reserved.</p>
    </div>
  );
};

export default Footer;
