import React from "react";
import { render } from "@testing-library/react";
import All from "./index";

describe("All page", () => {
  test("should render initially", () => {
    render(<All />);
  });
});
