import React from "react";
import { NavLink } from "react-router-dom";

function House({ house }) {
  function handleBooking() {

  }
  return (
    <div className="cards__item">
      <div className="cards">
        <img src={house.house_url} alt={house.name} className="image" />
        <div className="card__content">
          <div className="card-title">{house.name}</div>
          <div className="card__detail">
            <p className="house-address">{house.address}</p>
            <p className="house-pet">Pet: {house.pet}</p>
            <NavLink exact to="/BookingsPage"><button onClick={handleBooking}>My Bookings</button></NavLink>
            <NavLink exact to={`/houses/${house.id}`}><button >Book Now!</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default House;


//{/*  */}
// testing line 19 to handle use by id 

// cannot figure out 

// import React from "react";
// import {NavLink} from 'react-router-dom'

// function House({ house }) {
//   function handleBooking() {

//   }

//   return (
//     <div className="cards__item">
//       <div className="card">
//         <img src={house.house_url} alt={house.name} className="image" />
//         <div className="card__content">
//           <div className="card__title">{house.name}</div>
//           <div className="card__detail">
//           <p class="category">{house.address}</p>
//             <p class="category">Pet: {house.pet}</p>
//             <NavLink exact to="/BookingsPage"><button onClick={handleBooking}>Book Now!</button></NavLink>
//             <NavLink exact to='/houses/{house.id}'><button onClick={handleBooking}>Broken!</button></NavLink> 
//             {/* <button onClick={handleBooking}>Book Now!</button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default House;