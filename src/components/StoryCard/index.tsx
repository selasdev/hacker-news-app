import React from "react";
import { StoryType } from "components/StoriesRenderer";

import {
  Card,
  StoryInfoContainer,
  StoryFaveContainer,
  StoryInfoLink,
} from "./styles";

type StoryCardProps = {
  story: StoryType;
};

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <Card>
      <StoryInfoContainer>
        <StoryInfoLink
          target="_blank"
          rel="noopener noreferrer"
          href={story.story_url}
        >
          {story.author}
        </StoryInfoLink>
      </StoryInfoContainer>
      <StoryFaveContainer></StoryFaveContainer>
    </Card>
  );
};

export default StoryCard;
