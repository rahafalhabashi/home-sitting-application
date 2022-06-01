import React from "react";
import { NavLink } from "react-router-dom";


function House({ house }) {

  return (
    <div className="cards__item">
      <div className="cards">
        <img src={house.house_url} alt={house.name} className="image" />
        <div className="card__content">
          <div className="card-title">{house.name}</div>
          <div className="card__detail">
            <p className="house-address">{house.address}</p>
            <p className="house-pet">Pet: {house.pet}</p>
            <NavLink exact to={`/houses/${house.id}`}><button >View!</button></NavLink> 
          </div>
        </div>
      </div>
    </div>
  );
}
export default House;
