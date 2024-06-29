import styled from "styled-components";
import { ContainerProps } from "./types";
import MaskedInput from "react-text-mask";

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: ${(props) => props.flex ? props.flex : '1'};
`;

export const ContainerLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`

export const Label = styled.label`
    font-size: 17px;
    color: ${(props) => props.theme.colors.text};
    padding-left: 7px;
`;

export const InputText = styled.input`
    padding: 5px;
    height: 35px;
    width: 95%;
    color: ${(props) => props.theme.colors.text};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.backgroundLogin};
`;

export const InputMask = styled(MaskedInput)`
     padding: 5px;
    height: 35px;
    width: 95%;
    color: ${(props) => props.theme.colors.text};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.colors.backgroundLogin};
`