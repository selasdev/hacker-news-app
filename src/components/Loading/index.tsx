import React from "react";
import { LoadingContainer, Ring } from "./styles";

export type LoadingProps = {
  tall: boolean;
};

const Loading = ({ tall = true }: LoadingProps) => {
  return (
    <LoadingContainer tall={tall}>
      <Ring>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Ring>
    </LoadingContainer>
  );
};

export default Loading;
