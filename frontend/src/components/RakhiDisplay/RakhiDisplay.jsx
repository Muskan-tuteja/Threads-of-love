import React, { useContext } from "react";
import "./RakhiDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import RakhiItem from "../RakhItem/RakhiItem";

const RakhiDisplay = ({ category }) => {
  const { rakhi_list } = useContext(StoreContext);
  return (
    <div className="rakhi-display" id="rakhi-display">
      <h2>Trending Gift</h2>
      <div className="rakhi-display-list">
        {rakhi_list.map((item,index) => {
          if(category==="All" || category===item.category){
            return (
            <RakhiItem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );

          }
          
        })}
      </div>
    </div>
  );
};

export default RakhiDisplay;
