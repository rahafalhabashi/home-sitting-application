import React from "react";

function House({ house }) {

  return (
    <li className="cards__item">
      <div className="card">
        <img src={house.house_url} alt={house.name} className="card__image"/>
        <div className="card__content">
          <div className="card__title">{house.name}</div>
          <div className="card__detail">
            <p>{house.address}</p>
            <p>{house.pet}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default House;