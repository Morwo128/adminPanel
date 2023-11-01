import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./PostScreen.js";
import AdminLogin from "./AdminLogin.js";
import AdminPanel from "./AdminPanel.js";
import Navigation from "./Navigation.js";
import Cookies from "react-cookies";

function App() {
  const [user, setUser] = useState("");

  return (
    <Router>
      <div>
        {!Cookies.load("user") && <AdminLogin user={user} setUser={setUser} />}
        {Cookies.load("user") && (
          <div>
            <Navigation />
            <Routes>
              <Route path="/" exact component={Home} />
              <Route path="/admin" component={AdminPanel} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
