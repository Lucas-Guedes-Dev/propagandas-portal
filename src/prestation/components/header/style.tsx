import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${(props) => props.theme.colors.backgroundLogin} ;
    min-height: 70px;
`;