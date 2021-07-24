import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

export const ErrorElement = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`;
