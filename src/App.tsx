import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import FilterProvider from "contexts/FilterContext";

import Routes from "containers/Routes";
import Header from "components/Header";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <FilterProvider>
        <Routes />
      </FilterProvider>
    </QueryClientProvider>
  );
};

export default App;
