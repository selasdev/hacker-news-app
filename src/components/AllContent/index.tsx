import React, { useEffect } from "react";
import { useQueryClient } from "react-query";
import useQueryStories from "hooks/useQueryStories";
import { useInView } from "react-intersection-observer";

import Loading from "components/Loading";
import Error from "components/Error";
import StoriesRenderer from "components/StoriesRenderer";

import { StoriesContainer } from "./styles";
import { formatData } from "./utils";

type AllContentProps = {
  testByPass?: boolean;
};

const AllContent = ({ testByPass = false }: AllContentProps) => {
  const { isLoading, error, data, hasNextPage, fetchNextPage, isFetching } =
    useQueryStories();

  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 100,
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      queryClient.resetQueries();
    };
  }, []); //eslint-disable-line

  useEffect(() => {
    if (inView && !isFetching) {
      fetchNextPage();
    }
  }, [inView, isFetching, fetchNextPage]);

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
        {hasNextPage || testByPass ? (
          <div ref={ref}>
            <Loading tall={false} />
          </div>
        ) : null}
      </StoriesContainer>
    );
  }
};

export default AllContent;
