import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import sitemap from "constants/sitemap";

import Header from "components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={sitemap.home.path}></Route>
        <Route path={sitemap.faves.path}></Route>
      </Switch>
    </Router>
  );
};

export default App;
