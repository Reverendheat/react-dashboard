import React from 'react';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";

import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className={"app-container"}>
      <Router>
        <Header />
        <Sidebar />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
