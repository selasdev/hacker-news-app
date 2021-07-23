import React from "react";
import { StyledSelect } from "./styles";

import { stylesControl, options } from "./utils";

const FilterDropdown = () => {
  return (
    <StyledSelect
      placeholder="Select your news"
      options={options}
      isSearchable={false}
      styles={{
        control: stylesControl,
      }}
    />
  );
};

export default FilterDropdown;
