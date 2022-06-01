import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"

function BookingsPage() {
  const [savedHouses, setSavedHouses] = useState([]);

  useEffect(() => {
    fetch("/houses")
      .then((resp) => resp.json())
      .then((savedHouses) => setSavedHouses(savedHouses));
  }, []);

  function handleDelete(house) {
    fetch(`/houses/${house.id}`,{
        method: "DELETE",
        header: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => resp.json())
    .then(setSavedHouses(savedHouses.filter(savedHouse => {
        return savedHouse.id !== house.id
    })))
}

const renderSaved = savedHouses.map(house => {
  return (
      <li key={house.id}>
          <Link to={`/houses/${house.id}`}>{house.name}</Link>
          <button 
          className="delete-btn" 
          onClick={() => handleDelete(house)}>Cancel</button>
      </li>
  )
})

  return (
    <div>
      Bookings Page
      <ul>{renderSaved}</ul>
    </div>
  );
}

export default BookingsPage;




// const renderSaved = savedStories.map(story => {
//   return (
//       <li key={story.id}>
//           <Link to={`/savedstory/${story.id}`}>{story.title}</Link>
//           <button 
//           className="delete-btn" 
//           onClick={() => handleDelete(story)}>X</button>
//       </li>
//   )


