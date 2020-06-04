import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Container,
} from 'semantic-ui-react'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './NavBar'
import Home from './Home'
import SanscriptHome from './sanscript/SanscriptHome'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Container fluid style={{ marginTop: '7em' }}>
          <Switch>
            <Route path="/sanscript">
              <SanscriptHome />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
