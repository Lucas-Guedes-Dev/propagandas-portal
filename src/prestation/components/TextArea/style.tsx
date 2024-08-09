import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 5px;
`;

export const Label = styled.label`
    font-size: 17px;
    color: ${(props) => props.theme.colors.text};
`;

export const TextAreaInput = styled.textarea`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 5px;
`;