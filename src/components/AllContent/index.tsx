import React, { useEffect } from "react";
import { useQueryClient } from "react-query";
import useQueryStories from "hooks/useQueryStories";
import { StoriesContainer } from "./styles";
import { formatData } from "./utils";

const AllContent = () => {
  const { isLoading, error, data, hasNextPage, fetchNextPage, isFetching } =
    useQueryStories();

  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      queryClient.resetQueries();
    };
  }, []); //eslint-disable-line

  const loadMore = () => {
    fetchNextPage();
  };

  if (isLoading) {
    return (
      <StoriesContainer data-testid="story-loading-container">
        LOADING
      </StoriesContainer>
    );
  } else if (error) {
    console.error(error);

    return (
      <StoriesContainer data-testid="story-error-container">
        error
      </StoriesContainer>
    );
  } else {
    //@ts-ignore
    console.log(formatData(data));

    return (
      <StoriesContainer data-testid="story-loaded-container">
        ASDADS
        {hasNextPage && !isFetching ? (
          <button onClick={loadMore}>refetch</button>
        ) : null}
      </StoriesContainer>
    );
  }
};

export default AllContent;
