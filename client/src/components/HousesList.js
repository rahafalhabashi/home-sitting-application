import React from "react";
import { Link } from "react-router-dom";

function HousesList({ houses }) {
  const renderHouses = Object.keys(houses).map((houseID) => (
    <li key={houseID}>
      <Link to={`/houses/${houseID}`}>{houses[houseID].title}</Link>
    </li>
  ));

  return <ul>{renderHouses}</ul>;
}

export default HousesList;





////////////////////////////////////////////////
//          \/\/\/OG\/\/\/

// import React from 'react'
// import HousesListItem from "./HousesListItem"
// import { Card } from "semantic-ui-react";


// function HousesList( {houses} ){ 
//     const housesList = houses.map(house => {
//         return (
//             <HousesListItem 
//             key = {house.id}
//             house = {housesList}
//             />
//         )
//     })

//     return (
//         <div className="cards">
//     <Card.Group itemsPerRow={6}>
      
//       {housesList}
//     </Card.Group>


//         </div>


//     )
// }

// export default HousesList

