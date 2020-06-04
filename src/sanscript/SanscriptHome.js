import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

import { Grid, Segment } from 'semantic-ui-react';

import SanscriptSideNav from './SanscriptSideNav'
import SaTranslations from './SaTranslations'

const SanscriptHome = () => {
  let match = useRouteMatch();

  return (
    <Grid columns='2' divided>
      <Grid.Column computer={3} largeScreen={2} widescreen={1} >
        <SanscriptSideNav />
      </Grid.Column>
      <Grid.Column computer={13} largeScreen={14} widescreen={15}>
        <Switch>
          <Route path={`${match.url}/translations`}>
            <SaTranslations />
          </Route>
          <Route path="/">
            <div>
              <h1>Sanscript functionalities explorer</h1>
            </div>
          </Route>
        </Switch>
      </Grid.Column>
    </Grid>
  )
}
export default SanscriptHome