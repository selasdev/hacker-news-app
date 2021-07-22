import React from "react";
import NavigationSwitch from "components/NavigationSwitch";

import { Nav } from "./styles";
import sitemap from "constants/sitemap";

const pages = [
  { path: sitemap.home.path, title: "All" },
  { path: sitemap.faves.path, title: "My faves" },
];

const Navigation = () => {
  return (
    <Nav>
      <NavigationSwitch pages={pages} />
    </Nav>
  );
};

export default Navigation;
