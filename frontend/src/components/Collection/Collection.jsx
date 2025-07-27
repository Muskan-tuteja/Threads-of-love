import React from "react";
import "./Collection.css";
import { rakhi_collection } from "../../assets/assests";

const Collection = () => {
  return (
    <div className="rakhi-collection" id="rakhi-collection">
      <h1>Rakhi Collection</h1>
      <p className="rakhi-collection-text">
        Celebrate the beautiful bond between siblings with our handpicked Rakhi
        collection. From traditional threads to designer pieces, find the
        perfect Rakhi that expresses your love and care this festive season.
      </p>
      <div className="rakhi-collection-list">
        {rakhi_collection.map((item, index) => {
          return (
            <div key={index} className="rakhi-collection-list-item">
              <img src={item.rakhi_image} alt="" />
              <p>{item.rakhi_name}</p>
            </div>
          );
        })}
      </div>
      <hr></hr>
    </div>
  );
};

export default Collection;
