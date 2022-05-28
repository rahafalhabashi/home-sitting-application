import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const [user, setUser] = useState(null)
  const [houses, setHouses] = useState([])

  useEffect(() => {
    fetch("/me").then(res => {
      if (res.ok) {
        response.json().then(user => setUser(user))
      }
    });
  }, [])

  function handleLogin() {
    setUser(user)
  }

  function handleLogout() {
    setUser(null)
  }

  return (
    <Router>
        <Navbar onClick={handleLogin} onLogout={handleLogout} />
        {/* <Navbar.Brand></Navbar.Brand> */}
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/Login" >
              <Login handleLogin= {handleLogin} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default App;


