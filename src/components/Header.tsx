import React, { MouseEvent, useContext } from 'react';
import userLogo from "../images/default_user_avatar.png";

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 250px 1fr;
  box-shadow: 3px 3px 5px 6px #ccc;
`

const StyledLogo = styled.div`
  grid-column: 1;
  justify-self: center;
  align-self: center;
`

const StyledUserDropdown = styled.div`
  display: none;
  margin-top: 50px;
  width: 150px;
`

const StyledSpan = styled.span`
  position: relative;
  grid-column: 2;
  display: inline-flex;
  flex-direction: row;
  justify-self: flex-end;
  padding: 0.5em;
  align-self: center;
  cursor: pointer;
  transition: opacity 0.4s;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  &:hover ${StyledUserDropdown} {
    position: absolute;
    display: block;
    color: #2b90c8;
    ul {
      padding: 0px;
      list-style-type: none;
      li {
        padding: 5px;
        opacity: 0.6;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`

const StyledP = styled(StyledSpan)`
  margin-right: 10px;
`

const StyledImage = styled.img`
  max-height: 50px;
  height: auto;
  width: auto;
  border-radius: 50%;
`


export const Header = () => {
  let handleClick = (e: MouseEvent): void => {
    console.log("One day, i'll open a context menu");
  }
  return (
    <StyledHeader>
      <StyledLogo>
        <h1>Dashboard</h1>
      </StyledLogo>
      <StyledSpan onClick={handleClick}>
        <StyledP>User</StyledP>
        <StyledImage src={userLogo} alt="user" />
        <StyledUserDropdown>
          <ul>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        </StyledUserDropdown>
      </StyledSpan>
    </StyledHeader>
  )
}
