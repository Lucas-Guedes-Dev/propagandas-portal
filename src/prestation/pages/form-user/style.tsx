import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 30px;
`;

export const ButtonCommit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 40px;
    border-radius: 8px;
    border: 0px;
    color: ${props => props.theme.colors.button.text};
    font-size: 17px;
    background-color: ${props => props.theme.colors.button.background};

    &:active{
        background-color: ${props => props.theme.colors.secondSupportColor};
    }
`;
