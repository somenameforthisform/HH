import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary flex">
      <div className="navbar-brand logo">WebApp |</div>

      <ul className="navbar-nav flex mobileScale">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            На главную
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/news">
            Новости
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
            Профиль
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
