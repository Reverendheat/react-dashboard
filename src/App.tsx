import React, { createContext } from 'react';
// import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

import { ThemeContext } from './context/ThemeContext';

const StyledApp = styled.div`
  font-family: "Roboto", serif;
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 70px 1fr 70px;
  height: 100vh;
  grid-template-areas:
    "header  header"
    "nav    main"
    "empty footer";
  @media (max-width: 768px) {
    font-family: "Roboto", serif;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 70px 1fr 5fr 70px;
    height: 100vh;
    grid-template-areas:
      "header"
      "nav"
      "main"
      "footer";
  }
`

function App() {
  return (
    <StyledApp>
      <Router>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </Router>
    </StyledApp>
  );
}

export default App;
