import React from "react";
import "./ComboOffer.css";
import { combo_list } from "../../assets/assests";

const ComboOffer = () => {
  return (
    <div className="combo-offer" id="combo-offer">
      <h2>Combo Offer</h2>
      <div className="combo-offer-list">
        {combo_list.map((item, index) => (
          <div className="combo-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">${item.price}</p>
            {item.Sale !== undefined && item.Sale !== null && (
              <p className="sale-tag">${item.Sale}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComboOffer;
