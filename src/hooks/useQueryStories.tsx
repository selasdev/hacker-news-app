import { useFilter } from "contexts/FilterContext";
import { useInfiniteQuery } from "react-query";
import axios from "axios";

export const getStories = (currentFilter: string | undefined, page: number) => {
  if (currentFilter) {
    return axios(
      `https://hn.algolia.com/api/v1/search_by_date?query=${currentFilter}&page=${page}`
    );
  } else {
    return axios(`https://hn.algolia.com/api/v1/search_by_date?page=${page}`);
  }
};

const useQueryStories = () => {
  const { currentFilter } = useFilter();

  const query = useInfiniteQuery(
    "stories",
    ({ pageParam = 0 }) => getStories(currentFilter?.value, pageParam),
    {
      getPreviousPageParam: (firstPage) => {
        if (firstPage?.data?.page > 0) {
          return firstPage?.data?.page - 1;
        } else {
          return false;
        }
      },
      getNextPageParam: (lastPage) => {
        if (lastPage?.data?.page < lastPage?.data?.nbPages - 1) {
          return lastPage?.data?.page + 1;
        } else {
          return false;
        }
      },
    }
  );

  return query;
};

export default useQueryStories;
