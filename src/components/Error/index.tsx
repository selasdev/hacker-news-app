import React from "react";

import { LoadingContainer, ErrorElement, ErrorText } from "./styles";

import errorSrc from "assets/images/error.svg";

const Error = () => {
  return (
    <LoadingContainer>
      <ErrorElement src={errorSrc} alt="An error icon" />
      <ErrorText>
        Something weird happened, we couldn't fetch the data
      </ErrorText>
    </LoadingContainer>
  );
};

export default Error;
