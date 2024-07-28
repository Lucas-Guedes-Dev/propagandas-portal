import styled from "styled-components";
import { CheckBoxType } from "./types";

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<CheckBoxType>`
  display: inline-block;
  width: 16px;
  height: 16px; 
  background: ${props => (props.checked ? props.theme.colors.supportColor : props.theme.colors.backgroundLogin)};
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }
  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

export const ContainerLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 2;
`;

export const Label = styled.label`
  font-size: 17px;
`;

export const ContainerStyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`