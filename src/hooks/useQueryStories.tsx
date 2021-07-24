import { useFilter } from "contexts/FilterContext";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

type HelperDataType = {
  page: number;
  nbPages: number;
};

type PageHelpersInput = {
  data: HelperDataType;
};

export const getStories = async (
  currentFilter: string | undefined,
  page: number
) => {
  if (currentFilter) {
    const resp = await axios(
      `https://hn.algolia.com/api/v1/search_by_date?query=${currentFilter}&page=${page}`
    );

    console.log(JSON.stringify(resp));
    return resp;
  } else {
    const resp = await axios(
      `https://hn.algolia.com/api/v1/search_by_date?page=${page}`
    );

    console.log(JSON.stringify(resp));
    return resp;
  }
};

export const getPreviousPageHelper = (firstPage: PageHelpersInput) => {
  if (firstPage?.data?.page > 0) {
    return firstPage?.data?.page - 1;
  } else {
    return false;
  }
};

export const getNextPageHelper = (lastPage: PageHelpersInput) => {
  if (lastPage?.data?.page < lastPage?.data?.nbPages - 1) {
    return lastPage?.data?.page + 1;
  } else {
    return false;
  }
};

const useQueryStories = () => {
  const { currentFilter } = useFilter();

  const query = useInfiniteQuery(
    "stories",
    ({ pageParam = 0 }) => getStories(currentFilter?.value, pageParam),
    {
      getPreviousPageParam: getPreviousPageHelper,
      getNextPageParam: getNextPageHelper,
    }
  );

  return query;
};

export default useQueryStories;
