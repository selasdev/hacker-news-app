import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./index";

const MOCK_PAGES = [
  { path: "/", title: "All" },
  { path: "/faves", title: "My faves" },
];

test("should render initially", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Navigation pages={MOCK_PAGES} />
    </MemoryRouter>
  );

  const allElement = screen.getByText(MOCK_PAGES[0].title);
  const favesElement = screen.getByText(MOCK_PAGES[1].title);

  expect(allElement).toBeInTheDocument();
  expect(favesElement).toBeInTheDocument();
});
