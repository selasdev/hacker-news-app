import React from "react";
import { OptionType } from "components/FilterDropdown";
import { getOption } from "components/FilterDropdown/utils";

type FilterContextProps = {
  children: JSX.Element;
};

type useFilterType = {
  currentFilter: OptionType | null;
  setCurrentFilter: Function;
};

const Context = React.createContext<useFilterType>({
  currentFilter: null,
  setCurrentFilter: () => {},
});

const FilterContext = ({ children }: FilterContextProps) => {
  const [currentFilter, setCurrentFilter] = React.useState<OptionType | null>(
    getOption(window.localStorage.getItem("filter"))
  );

  return (
    <Context.Provider value={{ currentFilter, setCurrentFilter }}>
      {children}
    </Context.Provider>
  );
};

export const useFilter = (): useFilterType => {
  return React.useContext(Context);
};

export default FilterContext;
