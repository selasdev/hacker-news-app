import React from "react";
import { render } from "@testing-library/react";
import Error from "./index";

describe("Error", () => {
  test("should render the component", async () => {
    render(<Error />);
  });
});
