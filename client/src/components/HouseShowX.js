import React from "react";
import { useParams } from "react-router-dom";

function HouseShowX({ houses }) {
  // call useParams to access the `params` from the url
  const params = useParams();
  console.log(params);

  return (
    <div>
      {/* And here we access the `houseId` stored in `params` to render 
        information about the selected house */}
      <h3>{houses[params.houseId].title}</h3>
    </div>
  );
}

export default HouseShowX;