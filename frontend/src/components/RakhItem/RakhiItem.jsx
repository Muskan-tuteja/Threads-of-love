import React, { useContext } from "react";
import "./RakhiItem.css";
import { assests } from "../../assets/assests";
import { StoreContext } from "../../context/StoreContext";

const RakhiItem = ({ id, name, price, description, image }) => {
  
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className="rakhi-item">
      <div className="rakhi-item-img-container">
        <img className="rakhi-item-image" src={image} />
        {!cartItems[id]? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assests.add_icon_white}
          />
        ) : (
          <div className="rakhi-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assests.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() =>addToCart(id)}
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
