import React from "react";
import { render } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import Routes from "./Routes";

const queryClient = new QueryClient();

describe("Routes", () => {
  test("should render initially", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    );
  });
});
