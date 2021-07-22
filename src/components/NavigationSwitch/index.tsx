import React from "react";
import NavigationSwitchItem from "./NavigationSwitchItem";

import { MainContainer } from "./styles";

export type PagesType = {
  path: string;
  title: string;
};

type NavigationSwitchProps = {
  pages: Array<PagesType>;
};

const NavigationSwitch = ({ pages }: NavigationSwitchProps) => {
  return (
    <MainContainer>
      {pages.map((page, idx) => (
        <NavigationSwitchItem
          path={page.path}
          title={page.title}
          key={page.title + idx}
        />
      ))}
    </MainContainer>
  );
};

export default NavigationSwitch;
