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

export const AccordionStyled = styled.div<ContentAccordionType>`
    background-color: transparent;
    color: ${(props) => props.theme.colors.background};
    width: 100%;
    border-bottom: 2px solid ${(props) => props.expanded ? 'rgba(255, 255, 255, 0.056)' : 'transparent'};
`;

export const AccordionHeader = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    padding: 15px;
    padding-left: 25px;
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
    transition: min-height 0.5s ease-out;
    color: ${(props) => props.theme.colors.background};
    background-color: rgba(255, 255, 255, 0.056);
    max-height: ${(props) => (props.expanded ? `${props.maxHeight}px` : "0")};
    width: 100%;

    ${(props) =>
        props.expanded &&
        css`
            max-height: 1000px;
        `}
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
    flex: 1;
    transition: transform 0.5s ease;

    ${(props) =>
        props.expanded &&
        css`
            transform: rotate(-90deg);
        `}
`;