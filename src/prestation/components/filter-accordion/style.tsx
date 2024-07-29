import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    width: 95%;
`;

export const ContainerAccordion = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: 50px; 
    overflow-y: auto;
`

export const RowFilters = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    flex: 1;
    width: 100%;
    flex-wrap: wrap; 
    gap: 10px;
`;

export const RowActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    gap: 10px;
`;

export const AccordionItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(25% - 10px); 
    min-height: 50px;
`;

export const ButtonFilter = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.button.background};
    color: ${(props) => props.theme.colors.button.text};
    border: 0px;
    border-radius: 8px;
    gap: 3px;

    &:active{
        background-color: ${(props) => props.theme.colors.backgroundLogin};
    }
`;

export const ButtonNew = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 40px;
    background-color: ${(props) => props.theme.colors.secondSupportColor};
    color: ${(props) => props.theme.colors.button.text};
    border: 0px;
    border-radius: 8px;
    gap: 3px;

    &:active{
        background-color: ${(props) => props.theme.colors.backgroundLogin};
    }
`;