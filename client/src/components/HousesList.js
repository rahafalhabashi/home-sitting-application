import React from 'react'
import HousesListItem from "./HousesListItem"
import { Card } from "semantic-ui-react";


function HousesList( {houses} ){ 
    const housesList = houses.map(house => {
        return (
            <HousesListItem 
            key = {house.id}
            house = {housesList}
            />
        )
    })

    return (
        <div className="cards">
    <Card.Group itemsPerRow={6}>
      
      {housesList}
    </Card.Group>


        </div>


    )
}

export default HousesList
