import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 80vh; 
    flex: 1;
    background-color: ${(props) => props.theme.colors.cardBackground};
    border-radius: 16px;
    box-shadow: 10px 10px 95px 0px rgba(0,0,0,0.24);
    -webkit-box-shadow: 10px 10px 95px 0px rgba(0,0,0,0.24);
    -moz-box-shadow: 10px 10px 95px 0px rgba(0,0,0,0.24);
`;

export const TitleCard = styled.h2`
    font-weight: bold;
    padding: 0px;
    margin: 0px;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex: 1;
    width: 97.5%;
    border-bottom: 1px solid ${props => props.theme.colors.backgroundLogin};

    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
`;

export const CardColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex: 1;
`;

export const CardLine = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex: 1;
    width: 100%;
    gap: 1rem;

    @media (max-width: 768px) {
        flex-direction: column; 
    }
`;

export const CardBody = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    flex: 6;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    
    @media (max-width: 768px) {
        padding-top: 320px; 
    }
`;

export const CardFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    flex: 1;
    width: 98%;
    border-top: 1px solid ${props => props.theme.colors.backgroundLogin};
`;