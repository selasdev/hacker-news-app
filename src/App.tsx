import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import Routes from "containers/Routes";
import Header from "components/Header";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
