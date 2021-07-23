import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterDropdown from "./index";
import FilterProvider from "contexts/FilterContext";

describe("FilterDropdown page", () => {
  test("should render initially", () => {
    render(<FilterDropdown />);

    const select = screen.getByText("Select your news");

    expect(select).toBeInTheDocument();
  });

  test("should select an option", () => {
    render(
      <FilterProvider>
        <FilterDropdown />
      </FilterProvider>
    );

    const select = screen.getByText("Select your news");

    userEvent.click(select);

    const reactOption = screen.getByText("React");

    userEvent.click(reactOption);

    const emptySelection = screen.queryByText("Select your news");

    expect(emptySelection).toBeNull();
  });
});
