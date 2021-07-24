import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FaveHandler from "./index";
import FaveProvider from "contexts/FaveContext";

const StoryMock = {
  id: 0,
  created_at: "2021-07-24T02:56:31.000Z",
  author: "datad",
  story_title: "this is a title",
  story_url: "url",
};

describe("FaveHandler", () => {
  test("should render initially", () => {
    render(<FaveHandler story={StoryMock} />);

    const contentElement = screen.getByTestId("story-card-fave-handler");

    expect(contentElement).toBeInTheDocument();
  });

  test("should be able to interact with", () => {
    render(
      <FaveProvider>
        <FaveHandler story={StoryMock} />
      </FaveProvider>
    );

    const contentElement = screen.getByTestId("story-card-fave-handler");

    userEvent.click(contentElement);
    userEvent.click(contentElement);
    userEvent.click(contentElement);

    expect(contentElement).toBeInTheDocument();
  });
});
