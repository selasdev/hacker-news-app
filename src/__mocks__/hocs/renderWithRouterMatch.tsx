import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory, MemoryHistory } from "history";
import { render } from "@testing-library/react";

type renderWithRouterMatchType = {
  path?: string;
  route?: string;
  history?: MemoryHistory;
};

const renderWithRouterMatch = (
  ui: JSX.Element,
  {
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  }: renderWithRouterMatchType
) => {
  render(
    <Router history={history}>
      <Route path={path}>{ui}</Route>
    </Router>
  );
};

export default renderWithRouterMatch;
