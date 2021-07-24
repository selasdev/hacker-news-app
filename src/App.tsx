import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import FilterProvider from "contexts/FilterContext";
import FaveProvider from "contexts/FaveContext";

import Routes from "containers/Routes";
import Header from "components/Header";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <FilterProvider>
        <FaveProvider>
          <Routes />
        </FaveProvider>
      </FilterProvider>
    </QueryClientProvider>
  );
};

export default App;
