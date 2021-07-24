import React from "react";
import FilterDropdown from "components/FilterDropdown";
import AllContent from "components/AllContent";
import { AllContainer } from "./styles";
import { useFilter } from "contexts/FilterContext";

const All = () => {
  const { currentFilter } = useFilter();

  return (
    <AllContainer>
      <FilterDropdown />
      <AllContent key={currentFilter?.value} />
    </AllContainer>
  );
};

export default All;
