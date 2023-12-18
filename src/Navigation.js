import React from "react";
import { Link } from "react-router-dom";
import Cookies from "react-cookies";

const Navigation = ({ activeRoute, setUser }) => {

  const  handleLogout = () =>{
    Cookies.remove("user")
    setUser(undefined)
  }
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/posts"
              className={`nav-link ${activeRoute === "/home" ? "active" : ""}`}
            >
              Публікації
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/admin"
              className={`nav-link ${activeRoute === "/admin" ? "active" : ""}`}
            >
              Всі користувачі
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/createpost"
              className={`nav-link ${activeRoute === "/admin" ? "active" : ""}`}
            >
              Пост
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/exercise"
              className={`nav-link ${activeRoute === "/admin" ? "active" : ""}`}
            >
              Вправа на день
            </Link>
          </li>
          {Cookies.load("user") ? (
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-link">
                Вийти
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
      <style jsx>{`
        .header {
          background-color: #333;
          color: #fff;
          padding: 10px 0;
          text-align: center;
        }

        .nav-list {
          list-style: none;
          padding: 0;
        }

        .nav-item {
          display: inline;
          margin-right: 20px;
        }

        .nav-link {
          text-decoration: none;
          color: #fff;
          font-size: 18px;
          transition: color 0.3s;
        }

        .nav-link:hover {
          color: #00f; /* Колір при наведенні курсору */
        }

        .active {
          font-weight: bold;
        }

        .active:hover {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
};

export default Navigation;
