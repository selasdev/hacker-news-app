import styled from "styled-components";
import Select from "react-select";

export const StyledSelect = styled(Select)`
  width: 240px;
  div div span {
    display: none;
  }
`;

export const SelectItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 5px 0px;
`;

export const SelectItemImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 13px;
`;

export const SelectItemText = styled.p`
  font-size: 14px;
  line-height: 1.57;
  color: #343434;
  margin: 0px;
`;
