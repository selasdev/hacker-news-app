import React from "react";
import { render } from "@testing-library/react";
import Routes from "./Routes";

describe("Routes", () => {
  test("should render initially", () => {
    render(<Routes />);
  });
});
