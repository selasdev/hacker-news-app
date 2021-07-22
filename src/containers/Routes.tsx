import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "components/Navigation";

import sitemap from "constants/sitemap";

const Routes = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path={sitemap.home.path}></Route>
        <Route path={sitemap.faves.path}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
