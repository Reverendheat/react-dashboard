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
        <Redirect to="/dashboard" />
      </Route>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/tools" component={Tools} />
    </StyledMain>
  )
}
