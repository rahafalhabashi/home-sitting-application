import React, { useState } from 'react'

function HousesListItem() {

    const housesList = houses.map(house => {
        return (
            <HouseListItem 
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

export default HousesListItem