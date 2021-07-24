import styled from "styled-components";

export const StoriesGrid = styled.div`
  display: grid;
  grid-row-gap: 40px;
  grid-column-gap: 30px;
  grid-template-columns: repeat(auto-fill, 550px);

  @media (max-width: 850px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 550px));
  }
`;
