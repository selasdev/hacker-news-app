import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import NavigationSwitchItem from "./NavigationSwitchItem";

const MOCK_PAGE = { path: "/faves", title: "My faves" };

describe("NavigationSwitchItem", () => {
  test("should render initially", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavigationSwitchItem title={MOCK_PAGE.title} path={MOCK_PAGE.path} />
      </MemoryRouter>
    );

    const contentElement = screen.getByText(MOCK_PAGE.title);

    expect(contentElement).toBeInTheDocument();
  });

  test("should render actively", () => {
    render(
      <MemoryRouter initialEntries={[MOCK_PAGE.path]}>
        <NavigationSwitchItem title={MOCK_PAGE.title} path={MOCK_PAGE.path} />
      </MemoryRouter>
    );

    const contentElement = screen.getByText(MOCK_PAGE.title);

    expect(contentElement).toBeInTheDocument();
  });

  test("should go to path", () => {
    let testLocation;

    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavigationSwitchItem title={MOCK_PAGE.title} path={MOCK_PAGE.path} />
        <Route
          path="*"
          render={({ location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );

    const contentElement = screen.getByText(MOCK_PAGE.title);

    userEvent.click(contentElement);

    // @ts-ignore
    expect(testLocation?.pathname).toBe(MOCK_PAGE.path);
  });
});
