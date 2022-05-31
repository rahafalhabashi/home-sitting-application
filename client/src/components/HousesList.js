import React from 'react'
import HousesListItem from "./HousesListItem"

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
        <div>
            {housesList}
        </div>

    )
}

export default HousesList
