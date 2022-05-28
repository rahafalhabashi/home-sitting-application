import React from 'react'
import HousesListItem from "./HousesListItem"

function HousesList( {houses} ){ 
    const housesList = houses.map(house => {
        return (
            <HousesListItem 
            key = {house.id}
            house = {house}
            />
        )
    })

    return (
        <div>
            <ul> {housesList} </ul>
        </div>

    )
}

export default HousesList
