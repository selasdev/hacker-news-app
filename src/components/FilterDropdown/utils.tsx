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
    value: "react",
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
        border: "1px solid black !important",
        boxShadow: "0 0 0 1px solid !important",
        borderRadius: "4px",
      }
    : { ...styles, borderRadius: "4px" };
