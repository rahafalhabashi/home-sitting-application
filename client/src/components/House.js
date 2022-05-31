import React from "react";

function House({ house }) {
  function handleBooking() {
    fetch
  }

  return (
    <div className="cards__item">
      <div className="card">
        <img src={house.house_url} alt={house.name} className="card__image" />
        <div className="card__content">
          <div className="card__title">{house.name}</div>
          <div className="card__detail">
            <p>{house.address}</p>
            <p>Pet: {house.pet}</p>
            <button onClick={handleBooking}>Book Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default House;