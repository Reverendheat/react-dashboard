import React, { MouseEventHandler,MouseEvent } from 'react';
import "../App.css";
export const Sidebar = () => {
  let handleClick = (e:MouseEvent): void => {
    console.log(e.currentTarget.textContent);
  }
  return (
    <nav className="side-nav-bar">
        <ul className="nav-bar-list">
          <li className="nav-item" onClick={handleClick}>Dashboard</li>
          <li className="nav-item" onClick={handleClick}>Item List</li>
          <li className="nav-item" onClick={handleClick}>Tools</li>
          <li className="nav-item" onClick={handleClick}>Administration</li>
        </ul>
      </nav>
  )
}
