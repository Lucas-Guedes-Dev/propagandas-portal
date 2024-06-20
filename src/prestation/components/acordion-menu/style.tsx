import styled, { css } from "styled-components";
import { ContentAccordionType } from "../../types/styled-types";

export const Button = styled.button`
     display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    width: 100%;
    height: 40px;
    color: ${(props) => props.theme.colors.background};
    font-size: medium;
    font-weight: bold;
    background-color: transparent;
    border: 0px;
    padding-left: 10%;

    &:hover {
        background-color: rgba(255, 255, 255, 0.056);
    }
`;

export const AccordionStyled = styled.div`
  background-color: transparent;
  color: ${(props) => props.theme.colors.background};
  width: 100%;
`;

export const AccordionHeader = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 15px;
    color: ${(props) => props.theme.colors.background};
    font-size: large;
    font-weight: bold;
    width: 100%;
    background-color: transparent;
    border: 0px;
    
    &:hover {
        background-color: rgba(255, 255, 255, 0.056);
    }
`;

export const AccordionContent = styled.div<ContentAccordionType>`
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  color: ${(props) => props.theme.colors.background};
  max-height: ${(props) => (props.expanded ? "1000px" : "0")};
  width: 100%;
`;

export const ContainerTextHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 4;
`;

export const ContainerIconChevron = styled.div<ContentAccordionType>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    transition: transform 0.5s ease;


    ${(props) =>
        props.expanded &&
        css`
            transform: rotate(-180deg);
        `}
`;