import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95%;
    width: 95%;
    background-color: ${(props) => props.theme.colors.background};
    overflow-y: hidden;
    flex-direction: column;
`;