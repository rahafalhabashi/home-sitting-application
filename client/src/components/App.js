import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then(res => {
      if (res.ok) {
        Response.json().then(user => setUser(user))
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
      <div className="App">
        <Navbar onLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}> </Route>
            <Route path="/Login" element={<Login onClick={handleLogin} />}> </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
