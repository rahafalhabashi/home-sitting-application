import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HousesContainer from "./HousesContainer";
import Login from "./Login";
import Navbar from "./Navbar";
import CreateUser from "./CreateUser";
import BookingsPage from "./BookingsPage";
import '../App.css';


function App() {
  const [user, setUser] = useState(null)
  const [allHouses, setAllHouses] = useState([])


      useEffect(() => {
        fetch('/houses')
          .then(resp => resp.json())
          .then(data => setAllHouses(data))
    }, [])



  // useEffect(() => {
  //   fetch("/me").then(res => {
  //     if (res.ok) {
  //       res.json().then(user => setUser(user))
  //     }
  //   });
  // }, [])

  function handleLogin() {
    setUser(user)
  }

  function handleLogout() {
    setUser(null)
  }

  return (
    <Router>
      <Navbar onClick={handleLogin} onLogout={handleLogout} />
         <Switch>
          <Route exact path="/" >
            <HousesContainer houses={allHouses}/>
          </Route>
          <Route path="/Login" >
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path="/create-account">
            <CreateUser />
          </Route>
          <Route path="/BookingsPage">
            <BookingsPage houses={allHouses}/>
          </Route>
        </Switch>
    </Router>
  );
}


export default App;


