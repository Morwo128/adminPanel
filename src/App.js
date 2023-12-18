import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostScreen from "./PostScreen.js";
import AdminLogin from "./AdminLogin.js";
import UsersScreen from "./UsersScreen.js";
import Navigation from "./Navigation.js";
import Cookies from "react-cookies";
import CreatePostScreen from "./CreatePostScreen.js";
import ExerciseScreen from "./ExerciseScreen.js";

function App() {
  const [user, setUser] = useState("");

  return (
    <Router>
      <div>
        {!Cookies.load("user") && <AdminLogin user={user} setUser={setUser} />}
        {Cookies.load("user") && (
          <div>
            <Navigation setUser={setUser} />
            <Routes>
              <Route path="/posts" exact element={<PostScreen />} />
              <Route path="/admin" element={<UsersScreen />} />
              <Route path="/createpost" exact element={<CreatePostScreen />} />
              <Route path="/exercise" exact element={<ExerciseScreen />} />
            </Routes>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
