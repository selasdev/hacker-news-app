import styled from "styled-components";

/**
 * NavigationSwitch
 */

type MainContainerProps = {
  elements: number;
};

export const MainContainer = styled.div<MainContainerProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.elements}, 1fr);
`;

/**
 * NavigationSwitchItem
 */

type ActivableType = {
  active?: boolean;
};

export const SwitchItemContainer = styled.div<ActivableType>`
  transition: border 0.3s;
  border: 1px solid ${(props) => (props.active ? "#1797ff" : "#d6d6d6")};
  z-index: ${(props) => (props.active ? 1 : 0)};

  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 0px 16px;
  }
  &:not(:first-child) {
    position: relative;
    left: -1px;
  }
  &:first-child {
    border-radius: 2px 0px 0px 2px;
  }
  &:last-child {
    border-radius: 0px 2px 2px 0px;
  }
`;

export const SwitchItemText = styled.p<ActivableType>`
  transition: color 0.3s;
  height: 28px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  text-align: center;
  color: ${(props) => (props.active ? "#1797ff" : "#606060")};
  margin: 0px;
`;
