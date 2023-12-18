import React, { useEffect, useState } from "react";
import "./UsersScreen.css";
import axios from "axios";
import Cookies from "react-cookies";

function UsersScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://meditation-api-b34b74f3e544.herokuapp.com/api/v1/users/admin/",
        {
          headers: {
            Authorization: "Bearer " + Cookies.load("user"),
          },
        }
      )
      .then((item) => {
        setUsers(item.data);
      });
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setUsers(filteredUsers);
  }, [searchQuery]);

  return (
    <div className="users-screen">
      <h2>Список користувачів</h2>
      <input
        className="search-input"
        type="text"
        placeholder="Пошук за іменем"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="user-row">
              <td>{user.id}</td>
              <td>
                <img
                  className="avatar-image"
                  src={user.avatar}
                  alt={`Аватар користувача ${user.id}`}
                />
              </td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersScreen;
