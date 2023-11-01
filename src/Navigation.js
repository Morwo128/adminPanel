import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ activeRoute }) => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className={`nav-link ${activeRoute === "/home" ? "active" : ""}`}>
              Публікації
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className={`nav-link ${activeRoute === "/admin" ? "active" : ""}`}>
              Всі користувачі
            </Link>
          </li>
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
