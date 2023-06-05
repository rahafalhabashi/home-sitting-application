//////////THINK THIS SHOULD BE LIKE HOUSECONTAINER

import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import HousesList from "./HousesList";
import HouseShowX from "./HouseShowX";
import House from './House'

function HousePageX({ houses }) {
  const match = useRouteMatch();

  return (
    <div>
        <p> Hello! </p>
        <p> Need a home to stay in for your vacation? Just sit a pet and stay in one for free!</p>
           
        <div>
            <HousesList houses={houses} />
            <Route path={`${match.url}/:houseId`}>
                    <ul className="cards" style={{ display: 'flex' }}>
                        
                    {houses.map(house => <House key={house.id} house={house}/>)}
                        
                    </ul>
                <HouseShowX houses={houses} />
            </Route>
        </div>
    </div>
  );
}

export default HousePageX;



