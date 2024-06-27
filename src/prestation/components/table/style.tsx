import styled from "styled-components";

export const TableContainer = styled.table`
    width: 95%;
    box-shadow: 0px -5px 48px -3px rgba(0,0,0,0.1);
    -webkit-box-shadow: 0px -5px 48px -3px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px -5px 48px -3px rgba(0,0,0,0.1);
`;

export const Header = styled.thead`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const LineHeader = styled.tr`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex: 1;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    background-color: ${(props) => props.theme.colors.secondBackground};
    color: ${(props) => props.theme.colors.background};
`;

export const Body = styled.tbody`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    flex: 1;
    overflow-y: auto;
    height: 65vh;
    max-height: 65vh;
    background-color: ${(props) => props.theme.colors.cardBackground};   
    color: ${(props) => props.theme.colors.secondBackground};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`;

export const ColumnHeader = styled.th`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding-block: 1%;
`;

export const TextHeader = styled.label`
    font-size: medium;
    font-weight: bold;
`;

export const Line = styled.tr`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    max-height: 40px;
    border-bottom: 1px solid rgba(130,130,130, 0.156);
    padding-block: 2%;
`;

export const Column = styled.td`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    max-width: 250px;
`;

export const ContainerNotFound = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const LabelNotFound = styled.label`
    font-size: larger;
    font-weight: bold;
    color: ${(props) => props.theme.colors.errorColor};
` 