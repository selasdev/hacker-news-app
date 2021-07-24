import React from "react";
import { render, screen } from "@testing-library/react";
import StoriesRenderer from "./index";

const StoryMock = {
  id: 0,
  created_at: "2021-07-24T02:56:31.000Z",
  author: "Test Author 1",
  story_title: "Test Title 1",
  story_url: "url",
};

const StoryMock2 = {
  id: 1,
  created_at: "2021-07-24T02:56:31.000Z",
  author: "Test Author 2",
  story_title: "Test Title 2",
  story_url: "url",
};

describe("StoriesRenderer", () => {
  test("should render correctly", () => {
    render(<StoriesRenderer stories={[StoryMock, StoryMock2]} />);

    const titleElement1 = screen.getByText("Test Title 1");
    const titleElement2 = screen.getByText("Test Title 2");

    expect(titleElement1).toBeInTheDocument();
    expect(titleElement2).toBeInTheDocument();
  });
});
