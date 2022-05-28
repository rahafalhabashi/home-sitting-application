import React, { Component } from 'react'

function HousesList(){
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
