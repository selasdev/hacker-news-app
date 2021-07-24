import {
  getStories,
  getPreviousPageHelper,
  getNextPageHelper,
} from "./useQueryStories";
import axios from "axios";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useQueryStories utils", () => {
  test("getStories without filter and page 3", () => {
    mockedAxios.get.mockResolvedValue({ data: {} });

    getStories(undefined, 3);

    expect(mockedAxios).toHaveBeenCalledWith(
      "https://hn.algolia.com/api/v1/search_by_date?page=3"
    );
  });

  test("getStories with filter and page 1", () => {
    mockedAxios.get.mockResolvedValue({ data: {} });

    getStories("reactjs", 1);

    expect(mockedAxios).toHaveBeenCalledWith(
      "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=1"
    );
  });

  test("getPreviousPageHelper with no previous page", () => {
    const resp = getPreviousPageHelper({ data: { page: 0, nbPages: 50 } });

    expect(resp).toBe(false);
  });

  test("getPreviousPageHelper with previous page", () => {
    const resp = getPreviousPageHelper({ data: { page: 1, nbPages: 50 } });

    expect(resp).toBe(0);
  });

  test("getNextPageHelper with no next page", () => {
    const resp = getNextPageHelper({ data: { page: 49, nbPages: 50 } });

    expect(resp).toBe(false);
  });

  test("getNextPageHelper with next page", () => {
    const resp = getNextPageHelper({ data: { page: 0, nbPages: 50 } });

    expect(resp).toBe(1);
  });
});
