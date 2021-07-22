import React from "react";
import NavigationSwitch from "components/NavigationSwitch";

import { Nav } from "./styles";
import sitemap from "constants/sitemap";

const pages = [
  { path: sitemap.home.path, title: "" },
  { path: sitemap.faves.path, title: "" },
];

const Navigation = () => {
  return (
    <Nav>
      <NavigationSwitch pages={pages} />
    </Nav>
  );
};

export default Navigation;
