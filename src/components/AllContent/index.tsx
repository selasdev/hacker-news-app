import React, { useEffect } from "react";
import { useQueryClient } from "react-query";
import useQueryStories from "hooks/useQueryStories";
import Loading from "components/Loading";
import Error from "components/Error";

import StoriesRenderer from "components/StoriesRenderer";

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
        <Loading tall={true} />
      </StoriesContainer>
    );
  } else if (error) {
    console.error(error);

    return (
      <StoriesContainer data-testid="story-error-container">
        <Error />
      </StoriesContainer>
    );
  } else {
    return (
      <StoriesContainer data-testid="story-loaded-container">
        {/*@ts-ignore*/}
        <StoriesRenderer stories={formatData(data)} />
        {hasNextPage && !isFetching ? (
          <button onClick={loadMore}>refetch</button>
        ) : null}
      </StoriesContainer>
    );
  }
};

export default AllContent;
