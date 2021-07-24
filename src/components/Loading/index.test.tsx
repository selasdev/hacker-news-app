import React from "react";
import { render } from "@testing-library/react";
import Loading from "./index";

describe("Loading", () => {
  test("should render the component in tall mode", async () => {
    render(<Loading tall={true} />);
  });

  test("should render the component in short mode", async () => {
    render(<Loading tall={false} />);
  });
});
