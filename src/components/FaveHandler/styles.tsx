import styled, { css, keyframes } from "styled-components";

type FavoritableType = {
  favorite: boolean;
  touched: boolean;
};

export const MainHeartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
`;

export const FilledHeartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyHeartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const isFavoriteCSS = css`
  width: 24px;
  height: 24px;
`;

const isNotFavoriteCSS = css`
  width: 0px;
  height: 0px;
`;

const growingKeyframe = keyframes`
  0% {
    width: 0px;
    height: 0px;
  }
  70% {
    width: 32px;
    height: 32px;
  }
  100% {
    width: 24px;
    height: 24px;
  }
`;

const shrinkingKeyframe = keyframes`
  0% {
    width: 24px;
    height: 24px;
  }
  20% {
    width: 32px;
    height: 32px;
  }
  100% {
    width: 0px;
    height: 0px;
  }
`;

export const FilledHeartElement = styled.img<FavoritableType>`
  transition: all 0.3s;
  ${(props) => (props.favorite ? isFavoriteCSS : isNotFavoriteCSS)}
  animation: 0.4s ${(props) =>
    props.touched
      ? props.favorite
        ? growingKeyframe
        : shrinkingKeyframe
      : null};
`;

export const EmptyHeartElement = styled.img`
  width: 24px;
  height: 24px;
`;
