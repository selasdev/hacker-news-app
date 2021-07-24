import React from "react";
import { SelectItemContainer, SelectItemImage, SelectItemText } from "./styles";

import AngularLogo from "assets/images/angular-logo.png";
import ReactLogo from "assets/images/react-logo.png";
import VueLogo from "assets/images/vue-logo.png";

export const options = [
  {
    value: "angular",
    label: (
      <SelectItemContainer>
        <SelectItemImage src={AngularLogo} alt="Angular logo" />
        <SelectItemText>Angular</SelectItemText>
      </SelectItemContainer>
    ),
  },
  {
    value: "reactjs",
    label: (
      <SelectItemContainer>
        <SelectItemImage src={ReactLogo} alt="React logo" />
        <SelectItemText>React</SelectItemText>
      </SelectItemContainer>
    ),
  },
  {
    value: "vuejs",
    label: (
      <SelectItemContainer>
        <SelectItemImage src={VueLogo} alt="Vuejs logo" />
        <SelectItemText>Vuejs</SelectItemText>
      </SelectItemContainer>
    ),
  },
];

export const stylesControl = (styles: any, { isFocused, menuIsOpen }: any) =>
  isFocused || menuIsOpen
    ? {
        ...styles,
        border: "1px solid #2e2e2e !important",
        boxShadow: "0 0 0 1px #2e2e2e !important",
        borderRadius: "4px",
      }
    : { ...styles, borderRadius: "4px" };

export const getOption = (value: string | null) => {
  switch (value) {
    case "angular":
      return options[0];

    case "reactjs":
      return options[1];

    case "vuejs":
      return options[2];

    default:
      return null;
  }
};
