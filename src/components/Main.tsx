import React from 'react';
import '../App.css';
import { Dashboard } from './Dashboard';
import { Tools } from './Tools';
import { Route, Redirect } from 'react-router-dom';

export const Main = () => {
  return (
    <main className='main-container'>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/tools" component={Tools} />
    </main>
  )
}
