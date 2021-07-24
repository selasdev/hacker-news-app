import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "react-query";
import axios, { AxiosResponse } from "axios";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import AllContent from "./index";

const queryClient = new QueryClient();

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockedOkResponse: AxiosResponse = {
  data: {},
  status: 200,
  statusText: "OK",
  headers: {},
  config: {},
};

describe("AllContent", () => {
  test("should render loading container before data", () => {
    mockedAxios.get.mockResolvedValueOnce(mockedOkResponse);

    render(
      <QueryClientProvider client={queryClient}>
        <AllContent />
      </QueryClientProvider>
    );

    expect(screen.getByTestId("story-loading-container")).toBeInTheDocument();
  });

  test("should render data after loading", async () => {
    mockedAxios.get.mockResolvedValueOnce(mockedOkResponse);

    render(
      <QueryClientProvider client={queryClient}>
        <AllContent />
      </QueryClientProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(screen.getByTestId("story-loaded-container")).toBeInTheDocument();

    expect(mockedAxios).toHaveBeenCalledTimes(1);
  });

  test("should run fetchNextPage", async () => {
    mockedAxios.get.mockResolvedValueOnce(mockedOkResponse);

    render(
      <QueryClientProvider client={queryClient}>
        <AllContent testByPass={true} />
      </QueryClientProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(screen.getByTestId("story-loaded-container")).toBeInTheDocument();

    expect(mockedAxios).toHaveBeenCalledTimes(1);

    mockAllIsIntersecting(true);

    expect(mockedAxios).toHaveBeenCalledTimes(2);
  });
});
