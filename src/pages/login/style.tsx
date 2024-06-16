import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgb(230, 230, 230);
`;

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 60%;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 7px 42px -12px rgba(0,0,0,0.12);
    -webkit-box-shadow: 0px 7px 42px -12px rgba(0,0,0,0.12);
    -moz-box-shadow: 0px 7px 42px -12px rgba(0,0,0,0.12);
`;

export const ContainerElements = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const MovingImage = styled.img<{ offsetX: number; offsetY: number }>`
  position: absolute;
  max-width: 100px;
  transform: translate(${props => props.offsetX}px, ${props => props.offsetY}px);
  transition: transform 0.1s ease-out;
`;