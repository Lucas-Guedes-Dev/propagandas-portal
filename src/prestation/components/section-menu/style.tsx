import styled from "styled-components";
import { SideMenuType } from "../../types/styled-types";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 70px;
    background-color: transparent;
    border: 0px;
    flex-direction: row;
    &:hover{
        background-color: rgba(255, 255, 255, 0.056);
    }
`;

export const ContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1.5;
    width: 100%;
    height: 100%;
`;

export const ContainerText = styled.div<SideMenuType>`
    display: ${(props) => props.collapsed ? 'none' : 'flex'};
    align-items: center;
    justify-content: flex-start;
    flex: 4;
    width: 100%;
    padding-left: 3%;
`;

export const Text = styled.label`
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.background};
`;

