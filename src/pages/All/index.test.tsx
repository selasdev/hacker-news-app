import React from "react";
import { render } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import All from "./index";

const queryClient = new QueryClient();

describe("All page", () => {
  test("should render initially", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <All />
      </QueryClientProvider>
    );
  });
});
