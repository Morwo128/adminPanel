import React, { useState } from "react";
import "./AdminLogin.css";
import Cookies from "react-cookies";
import axios from "axios";

function AdminLogin({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    const newErrors = {};

    if (!username) {
      newErrors.username = "Введіть логін";
    }

    if (!password) {
      newErrors.password = "Введіть пароль";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await axios.post(
        "https://meditation-api-b34b74f3e544.herokuapp.com/api/v1/access-token",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      Cookies.save("user", response.data.access_token);
      setUser("asd");
    } catch (error) {
      console.error("Помилка запиту:", error);
    }
  };

  return (
    <div className="admin-login-container">
      <h1>Вхід в адмін-панель</h1>
      <form>
        <div className="form-group">
          <label>Логін:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <div className="error-message">{errors.username}</div>
          )}
        </div>
        <div className="form-group">
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className="error-message">{errors.password}</div>
          )}
        </div>
        <button type="button" onClick={handleLogin}>
          Увійти
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
