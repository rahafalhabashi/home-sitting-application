// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"

// function BookedHouse() {
//     const [house, setHouse] = useState({})
//     const params = useParams()

//     useEffect(() => {
//         fetch(`houses/${params.id}`)
//         .then(resp => resp.json())
//         .then(house => setHouse(house))
//     }, [params.id])

//     return (
//         <div className="house">
//             <h1>{house.name}</h1>
//             <h4>{house.house_url}</h4>
//         </div>
//     )
// }

// export default BookedHouse