import React from "react";
import { StyledSelect } from "./styles";
import { useFilter } from "contexts/FilterContext";

import { stylesControl, options } from "./utils";

export type OptionType = {
  value: string;
  label: any;
};

const FilterDropdown = () => {
  const { currentFilter, setCurrentFilter } = useFilter();

  const handleChange = (values: OptionType) => {
    console.log(handleChange);
    window.localStorage.setItem("filter", values.value);
    setCurrentFilter(values);
  };

  return (
    <StyledSelect
      name="filter-select"
      onChange={handleChange}
      value={currentFilter}
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
