import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

export const Sidebar = () => {
  return (
    <nav className="side-nav-bar">
      <div className="nav-bar-container">
        <NavLink to="/dashboard" className="nav-item" activeStyle={{
          fontWeight: "bold",
        }}>
          Dashboard
        </NavLink>
        <NavLink to="/items" className="nav-item" activeStyle={{
          fontWeight: "bold",
        }}>Item List
        </NavLink>
        <NavLink to="/tools" className="nav-item" activeStyle={{
          fontWeight: "bold",
        }}>Tools
        </NavLink>
        <NavLink to="/administration" className="nav-item" activeStyle={{
          fontWeight: "bold",
        }}>Administration
        </NavLink>
      </div>
    </nav>
  )
}
