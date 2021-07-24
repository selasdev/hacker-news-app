import React, { useEffect } from "react";
import { useQueryClient } from "react-query";
import useQueryStories from "hooks/useQueryStories";
import { StoriesContainer } from "./styles";

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
    return <StoriesContainer>LOADING</StoriesContainer>;
  } else if (error) {
    console.error(error);
    return <StoriesContainer>error</StoriesContainer>;
  } else {
    console.log(data);
    return (
      <StoriesContainer>
        ASDADS
        {hasNextPage && !isFetching ? (
          <button onClick={loadMore}>refetch</button>
        ) : null}
      </StoriesContainer>
    );
  }
};

export default AllContent;
