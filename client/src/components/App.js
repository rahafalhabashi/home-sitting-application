import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HousesContainer from "./HousesContainer";
import Login from "./Login";
import Navbar from "./Navbar";
import CreateUser from "./CreateUser";
// import { NavLink } from "react-router-dom";
import BookingsPage from "./BookingsPage";
import '../App.css';


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
    }, [])

  if (user) {
    return <h2>Welcome, {user.username}! </h2>
  }
  // (!isAuthenticated) 
  else {
    <Login error={'Please login!'} onLogin={setUser} setIsAuthenticated={setIsAuthenticated} />
  }
    fetch("/houses")
      .then((resp) => resp.json())
      .then((houses) => setHouses(houses));
  }, []);

  function handleLogin() {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
    setLoggedIn(false);
  }

  if (!isAuthenticated) {
    <Login
      error={"Please login!"}
      handleLogin={handleLogin}
      setUser={setUser}
      setIsAuthenticated={setIsAuthenticated}
    />;
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
        <Route exact path="/">
          <HousesContainer houses={houses} />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/create-account">
          <CreateUser
            setUser={setUser}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Route>
        <Route path="/BookingsPage">
          <BookingsPage houses={houses} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


