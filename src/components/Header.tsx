import React, {MouseEvent} from 'react';
import userLogo from "../images/default_user_logo.png";
import "../App.css";

export const Header = () => {
  let handleClick = (e:MouseEvent): void => {
    console.log("One day, i'll open a context menu");
  }
  return (
    <header className="header-container">
      <div className="logo">
        <h1>Director</h1>
      </div>
      <span onClick={handleClick} className="user-settings-container">
        <p>User</p>
        <img className="user-icon" src={userLogo} alt="user" />
      </span>
    </header>
  )
}
