import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import sitemap from "constants/sitemap";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={sitemap.home.path}></Route>
        <Route path={sitemap.faves.path}></Route>
      </Switch>
    </Router>
  );
};

export default App;
