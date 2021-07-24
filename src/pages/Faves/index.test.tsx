import React from "react";
import { render } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import Faves from "./index";

const queryClient = new QueryClient();

describe("Faves page", () => {
  test("should render initially", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <Faves />
      </QueryClientProvider>
    );
  });
});
