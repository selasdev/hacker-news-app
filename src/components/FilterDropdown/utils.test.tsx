import { render } from "@testing-library/react";
import { getOption, stylesControl } from "./utils";

describe("FilterDropdown utils", () => {
  test("should render angular option", () => {
    render(getOption("angular").label);
  });

  test("should render react option", () => {
    render(getOption("angular").label);
  });

  test("should render vuejs option", () => {
    render(getOption("vuejs").label);
  });

  test("should render default option", () => {
    render(getOption(null).label);
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
