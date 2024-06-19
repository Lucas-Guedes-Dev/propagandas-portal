import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%; 
    height: 40px;
    border-radius: 30px;
    border: 0px;
    background-color: ${(props) => props.theme.colors.supportColor};

    &:active{
        background-color: ${(props) => props.theme.colors.secondSupportColor};
    }
`;

export const Text = styled.label`
    font-size: medium;
    font-weight: bold; 
    text-align: center;
    color: ${(props) => props.theme.colors.button.text};
`;

