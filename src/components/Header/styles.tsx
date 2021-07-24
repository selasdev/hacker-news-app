import styled from "styled-components";

export const MainHeader = styled.header`
  width: 100%;
  padding: 44px 150px 42px;
  margin: 0 0 70px;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #ffffff 124%);
  @media (max-width: 768px) {
    padding: 44px 40px 42px;
  }
`;

export const PageTitle = styled.h2`
  font-family: Baskerville;
  font-size: 28px;
  font-weight: normal;
  line-height: 1;
  color: #3b3b3b;
  text-transform: uppercase;
`;
