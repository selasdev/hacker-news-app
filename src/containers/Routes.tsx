import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";
import All from "pages/All";
import Faves from "pages/Faves";

import sitemap from "constants/sitemap";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path={sitemap.home.path}>
          <All />
        </Route>
        <Route exact path={sitemap.faves.path}>
          <Faves />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
