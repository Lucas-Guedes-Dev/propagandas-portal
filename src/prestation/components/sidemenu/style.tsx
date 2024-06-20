import styled, { css } from "styled-components";
import { SideMenuType } from "../../types/styled-types";

export const Container = styled.div<SideMenuType>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: ${(props) => (props.collapsed ? '5%' : '23%')};
    background-color: ${(props) => props.theme.colors.secondBackground};
    transition: width 0.3s ease; 
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 70px;
    border-bottom: 2px solid rgba(255,255,255,0.256);
`;

export const ButtonCollapsed = styled.button<SideMenuType>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 100%;
    border: 0px;
    transition: transform 0.5s ease;
    background-color: transparent;

    &:active{
        background-color: ${(props) => props.theme.colors.secondSupportColor};
    }

    ${(props) =>
        props.collapsed &&
        css`
            transform: rotate(-180deg);
        `}
`;

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 10;
    width: 100%;
    height: 100%;
    padding-left: 7%;
`;

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    flex: 10;
    width: 100%;
`;