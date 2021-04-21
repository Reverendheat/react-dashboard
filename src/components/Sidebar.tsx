import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

export const Sidebar = () => {
  return (
    <nav className="side-nav-bar">
      <ul className="nav-bar-list">
        <NavLink to="/dashboard" className="nav-item" activeStyle={{
          fontWeight: "bold",
        }}>
          <li>Dashboard</li>
        </NavLink>
        <NavLink to="/items" className="nav-item" activeStyle={{
          fontWeight: "bold",
        }}>
          <li>Item List</li>
        </NavLink>
        <NavLink to="/tools" className="nav-item" activeStyle={{
          fontWeight: "bold",
        }}>
          <li>Tools</li>
        </NavLink>
        <NavLink to="/administration" className="nav-item" activeStyle={{
          fontWeight: "bold",
        }}>
          <li>Administration</li>
        </NavLink>
      </ul>
    </nav>
  )
}
