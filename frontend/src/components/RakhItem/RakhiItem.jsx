import React, { useState } from "react";
import "./RakhiItem.css";
import { assests } from "../../assets/assests";

const RakhiItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className="rakhi-item">
      <div className="rakhi-item-img-container">
        <img className="rakhi-item-image" src={image} />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => setItemCount((prev) => prev + 1)}
            src={assests.add_icon_white}
          />
        ) : (
          <div className="rakhi-item-counter">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assests.remove_icon_red}
              alt=""
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assests.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="rakhi-item-info">
        <div className="rakhi-item-name-rating">
          <p>{name}</p>
          <img src={assests.rating_starts} alt="" />
        </div>
        <p className="rakhi-item-desc">{description}</p>
        <p className="rakhi-item-price">${price}</p>
      </div>
    </div>
  );
};

export default RakhiItem;
