// import React from "react";
// import { NavLink } from "react-router-dom";
// import "../Modal.css";


// function Modal({ closeModal, houses }) {

    
      
//   return (
//     // <div class="modal hide fade" data-keyboard="false" data-backdrop="static">
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <div className="titleCloseBtn">
//           <button onClick={() => { closeModal(false);}}> X </button>
//         </div>
//         <div className="title">
//           <h1>Are You Sure You Want to Continue?</h1>
//         </div>
//         <div className="body">
//           <p>The next page looks amazing. Hope you want to go there!</p>
//         </div>
//         <div className="footer">
//           <button onClick={() => { closeModal(false);}} id="cancelBtn">
//             Cancel
//           </button>
//           <NavLink exact to="/BookingsPage"><button>Book It!</button></NavLink>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// }

// export default Modal;






// <div className="cards__item">
//       <div className="cards">
//         <img src={house.house_url} alt={house.name} className="image" />
//         <div className="card__content">
//           <div className="card-title">{house.name}</div>
//           <div className="card__detail">
//             <p className="house-address">{house.address}</p>
//             <p className="house-pet">Pet: {house.pet}</p>

//             {/* <Link exact to={`/houses/${house.id}`}>      */}
//             <button
//               className="openModalBtn"
//               onClick={() => {
//                 setOpenModal(true);
//               }}
//             >
//               View!
//             </button>
//             {/* </Link> */}
//             {openModal && <Modal closeModal={setOpenModal}/>}
//           </div>
//         </div>
//       </div>
//     </div>

