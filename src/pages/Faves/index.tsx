import React from "react";
import { useFave } from "contexts/FaveContext";
import StoriesRenderer from "components/StoriesRenderer";

import { AllContainer } from "pages/All/styles";

const Faves = () => {
  const { currentFaves } = useFave();

  return (
    <AllContainer>
      <StoriesRenderer stories={currentFaves} />
    </AllContainer>
  );
};

export default Faves;
