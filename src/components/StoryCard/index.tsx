import React from "react";
import { StoryType } from "components/StoriesRenderer";
import * as timeago from "timeago.js";

import FaveHandler from "components/FaveHandler";
import {
  Card,
  StoryInfoContainer,
  StoryFaveContainer,
  StoryInfoLink,
  TimeAndAuthorContainer,
  ClockElement,
  TimeAndAuthorText,
  StoryTitleText,
} from "./styles";
import ClockSrc from "assets/images/clock.svg";

export type StoryCardProps = {
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
          <TimeAndAuthorContainer>
            <ClockElement src={ClockSrc} alt="A clock representing time left" />
            <TimeAndAuthorText>
              {timeago.format(story.created_at)} by {story.author}
            </TimeAndAuthorText>
          </TimeAndAuthorContainer>
          <StoryTitleText>{story.story_title}</StoryTitleText>
        </StoryInfoLink>
      </StoryInfoContainer>
      <StoryFaveContainer>
        <FaveHandler story={story} />
      </StoryFaveContainer>
    </Card>
  );
};

export default StoryCard;
