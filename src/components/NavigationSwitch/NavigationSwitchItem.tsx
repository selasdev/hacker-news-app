import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

import { SwitchItemContainer, SwitchItemText } from "./styles";

import { PagesType } from "./index";

const NavigationSwitchItem = ({ path, title }: PagesType) => {
  const match = useRouteMatch(path);

  return (
    <SwitchItemContainer active={match?.isExact}>
      <Link to={path}>
        <SwitchItemText active={match?.isExact}>{title}</SwitchItemText>
      </Link>
    </SwitchItemContainer>
  );
};

export default NavigationSwitchItem;
