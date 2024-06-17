import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${(props) => props.theme.colors.input.background};
    border-radius: 30px;
    width: 80%;
    height: 40px;
`;

export const ContainerIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
`;

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 3;
    width: 100%;
    height: 100%;
`;

export const Input = styled.input`
    padding-left: 5px;
    font-size: medium;
    background-color: transparent;
    border: 0px;
    color: ${(props) => props.theme.colors.input.text};
    width: 100%;
    height: 100%;
    outline: none;
    &:focus {
        border-color: transparent; 
        box-shadow: none; 
    }
`;