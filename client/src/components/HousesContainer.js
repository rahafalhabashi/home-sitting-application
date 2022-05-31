import React from 'react'
import House from './House'

function HousesContainer({houses}) {


    return (
        <div >
            <p> Hello! </p>
            <p> Need a home to stay in for your vacation? Just sit a pet and stay in one for free!</p>
        
            <ul className="cards" style={{ display: 'flex' }}>
                {houses.map(house => <House key={house.id} house={house}/>)}
            </ul>
        </div>
    );
}

export default HousesContainer;


// ^^^^ formally known as House
// style={{ display: 'flex' }} in classname
