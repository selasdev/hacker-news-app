import styled from "styled-components";

export const Card = styled.div`
  transition: opacity 0.3s;
  width: 100%;
  height: 90px;
  border-radius: 6px;
  border: 1px solid rgba(151, 151, 151, 0.8);
  background-color: #ffffff;
  opacity: 1;
  display: flex;
  &:hover {
    opacity: 0.4;
  }
`;

export const StoryInfoContainer = styled.div`
  flex: 1;
  height: 100%;
`;

export const StoryInfoLink = styled.a`
  width: 100%;
  height: 100%;
  padding: 25px 16px 0px 26px;
  display: block;
  text-decoration: none;
`;

export const StoryFaveContainer = styled.div`
  height: 100%;
  width: 68px;
  background-color: rgba(96, 96, 96, 0.06);
`;
