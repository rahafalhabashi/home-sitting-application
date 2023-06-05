import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HousesContainer from "./HousesContainer";
import Login from "./Login";
import Navbar from "./Navbar";
import CreateUser from "./CreateUser";
// import HousesList from "./HousesList";
import BookingsPage from "./BookingsPage";
import '../App.css';
import { Redirect } from "react-router-dom";
// import HousePageX from "./HousePageX";




function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [houses, setHouses] = useState([]);

  //Keeps user logged in
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    })

    fetch("/houses").then((res) => {
      if (res.ok) {
        res.json().then((houses) => {
          setHouses(houses);

        });
      }
    });
  }, [])


  // if (user) {
  //   return <h2>Welcome, {user.username}! </h2>
  // }
  // // (!isAuthenticated) 
  // else {
  //   <Login error={'Please login!'} onLogin={setUser} setIsAuthenticated={setIsAuthenticated} />
  // }


  // fetch("/houses") 
  //     .then((resp) => {
  //       if (resp.ok) {
  //         resp.json().then((houses) => {
  //           setHouses(houses);
  // }, []);

  function handleLogin() {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
    setLoggedIn(false);
  }

  return (
    <Router>
      <Navbar
        onLogout={handleLogout}
        onLogin={handleLogin}
        loggedIn={loggedIn}
        user={user}
        setUser={setUser}
      />
      <Switch>
        {/* <Route exact path="/">
          <HousePageX houses={houses} />
        </Route> */}
         <Route exact path="/">
          <HousesContainer houses={houses} />
        </Route>
        <Route path="/Login">
          <Login
            handleLogin={handleLogin}
            setUser={setUser}
            setIsAuthenticated={setIsAuthenticated} />
                      { user ? <Redirect to={''} /> : <Redirect to={'/login'} />}

        </Route>
        <Route path="/create-account">
          <CreateUser
            setUser={setUser}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Route>
        <Route path="/BookingsPage">
          {
            user ? <BookingsPage houses={houses} /> : <Redirect to={'/login'} />

          }
        </Route>
        {/* <Route >

           <HousesListItem houses={houses} /> : <Redirect to={`/houses/${house.id}`} />

        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;






///////// changing houses container to HPX