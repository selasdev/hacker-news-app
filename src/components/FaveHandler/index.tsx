import React from "react";

import { StoryCardProps } from "components/StoryCard";

import {
  MainHeartContainer,
  FilledHeartContainer,
  EmptyHeartContainer,
  FilledHeartElement,
  EmptyHeartElement,
} from "./styles";

import filledHeartSrc from "assets/images/heart-filled.svg";
import emptyHeartSrc from "assets/images/heart-empty.svg";

type FaveHandlerProps = {} & StoryCardProps;

const FaveHandler = ({ story }: FaveHandlerProps) => {
  const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
  const [isTouched, setIsTouched] = React.useState<boolean>(false);

  const favoriteHandler = () => {
    setIsTouched(true);
    setIsFavorite((currentFave) => !currentFave);
  };

  return (
    <MainHeartContainer onClick={favoriteHandler}>
      <FilledHeartContainer>
        <FilledHeartElement
          favorite={isFavorite}
          touched={isTouched}
          src={filledHeartSrc}
          alt="A filled heart"
        />
      </FilledHeartContainer>
      <EmptyHeartContainer>
        <EmptyHeartElement src={emptyHeartSrc} alt="A empty heart" />
      </EmptyHeartContainer>
    </MainHeartContainer>
  );
};

export default FaveHandler;
