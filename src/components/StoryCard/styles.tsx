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
  width: calc(100% - 68px);
  height: 100%;
`;

export const StoryInfoLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0px 16px 0px 26px;
  text-decoration: none;
`;

export const StoryFaveContainer = styled.div`
  height: 100%;
  width: 68px;
  background-color: rgba(96, 96, 96, 0.06);
`;

export const TimeAndAuthorContainer = styled.div`
  display: flex;
  margin-bottom: 6px;
  align-items: center;
`;

export const ClockElement = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const TimeAndAuthorText = styled.small`
  font-size: 11px;
  color: #767676;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc(100% - 24px);
`;

export const StoryTitleText = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #828282;
  max-height: 40px;
  overflow: hidden;
`;
