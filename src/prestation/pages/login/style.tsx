import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.backgroundLogin};
`;

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 60%;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.background};
    box-shadow: 0px 7px 42px -12px rgba(0,0,0,0.12);
    -webkit-box-shadow: 0px 7px 42px -12px rgba(0,0,0,0.12);
    -moz-box-shadow: 0px 7px 42px -12px rgba(0,0,0,0.12);
`;

export const ContainerElements = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    gap: 20px;
`;

export const ContainerImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    
    @media (max-width: 600px) {
        display: none;
    } 
`;

export const ContainerInputs = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    flex: 2;
    width: 100%;
    height: 100%;
    gap: 20px;
`;

export const MovingImage = styled.img<{ offsetX: number; offsetY: number }>`
    position: absolute;
    max-width: 250px;
    transform: translate(${props => props.offsetX}px, ${props => props.offsetY}px);
    transition: transform 0.1s ease-out;
`;

export const ContainerTitleLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.3;
`;

export const TitleLogin = styled.h2`
    color: ${(props) => props.theme.colors.text};
`;