import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

export const Sidebar = () => {
  return (
    <nav className="side-nav-bar">
      <div className="nav-bar-container">
        <NavLink to="/react-dashboard/dashboard" className="nav-item" activeStyle={{
          fontWeight: "bold",
        }}>
          Dashboard
        </NavLink>
        <NavLink to="/react-dashboard/tools" className="nav-item" activeStyle={{
          fontWeight: "bold",
        }}>
          Tools
        </NavLink>
      </div>
    </nav>
  )
}
