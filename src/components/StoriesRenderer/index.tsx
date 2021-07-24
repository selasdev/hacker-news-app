import React from "react";
import StoryCard from "components/StoryCard";

import { StoriesGrid } from "./styles";

export type StoryType = {
  id: number;
  author: string;
  created_at: string;
  story_title: string;
  story_url: string;
};

type StoriesRendererProps = {
  stories: Array<StoryType>;
};

const StoriesRenderer = ({ stories }: StoriesRendererProps) => {
  return (
    <StoriesGrid>
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </StoriesGrid>
  );
};

export default StoriesRenderer;
