import React from "react";
import { render, screen } from "@testing-library/react";
import StoryCard from "./index";

const StoryMock = {
  id: 0,
  created_at: "2021-07-24T02:56:31.000Z",
  author: "Test Author",
  story_title: "Test Title",
  story_url: "url",
};

describe("StoryCard", () => {
  test("should render correctly", () => {
    render(<StoryCard story={StoryMock} />);

    const authorElement = screen.getByText(/by Test Author/);
    const titleElement = screen.getByText("Test Title");

    expect(authorElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
