import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-inline: 2%;
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

export const BodyForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    flex-direction: column;
    width: 100%;
`;

export const FooterForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    border-top: 1px solid ${props => props.theme.colors.backgroundLogin};
    margin-top: auto; 
    padding: 15px;
`;

export const LineForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex: 1;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const HeaderForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    flex: 0.1;
`;