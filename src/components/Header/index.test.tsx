import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header", () => {
  test("should render header info", () => {
    render(<Header />);

    const header = screen.getByText("Hacker News");

    expect(header).toBeInTheDocument();
  });
});
