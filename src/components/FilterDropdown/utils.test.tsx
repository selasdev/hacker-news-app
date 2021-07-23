import React from "react";
import { render } from "@testing-library/react";
import { getOption, stylesControl } from "./utils";

describe("FilterDropdown utils", () => {
  test("should render angular option", () => {
    render(<React.Fragment>{getOption("angular")?.label}</React.Fragment>);
  });

  test("should render react option", () => {
    render(<React.Fragment>{getOption("react")?.label}</React.Fragment>);
  });

  test("should render vuejs option", () => {
    render(<React.Fragment>{getOption("vuejs")?.label}</React.Fragment>);
  });

  test("should render default option", () => {
    expect(getOption(null)).toBeNull();
  });

  test("styles control focused and menu open", () => {
    const resultStyles = stylesControl(
      {},
      { isFocused: true, menuIsOpen: true }
    );

    expect(resultStyles.border).toBeDefined();
  });

  test("styles control not focused and menu closed", () => {
    const resultStyles = stylesControl(
      {},
      { isFocused: false, menuIsOpen: false }
    );

    expect(resultStyles.border).toBeUndefined();
  });
});
