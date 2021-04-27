import React from 'react';
import '../App.css';
import { Dashboard } from './Dashboard';
import { Tools } from './Tools';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components'

const StyledMain = styled.main`
`

export const Main = () => {
  return (
    <StyledMain>
      <Route exact path="/">
        <Redirect to="/react-dashboard/dashboard" />
      </Route>
      <Route exact path="/react-dashboard">
        <Redirect to="/react-dashboard/dashboard" />
      </Route>
      <Route exact path="/react-dashboard/dashboard" component={Dashboard} />
      <Route exact path="/react-dashboard/tools" component={Tools} />
    </StyledMain>
  )
}
