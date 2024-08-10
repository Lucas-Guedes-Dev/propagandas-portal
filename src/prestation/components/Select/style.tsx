import styled from "styled-components";
import Select from "react-select";

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
    flex: 1;
    gap: 5px;
`;

export const Label = styled.label`
    font-size: 17px;
    color: ${(props) => props.theme.colors.text};
`;

export const StyledSelect = styled(Select)`
    width: 100%;
    height: 100%;
    padding: 0px;
    border-radius: 0;

    .Select__control {
        height: 100%;
        width: 100%;
        border-radius: 0;
        cursor: pointer;
    }

    .Select__control:hover {
        border-color: #a1a1a1;
    }

    .Select__control--is-focused {
        box-shadow: 0 0 0 1px black;
        outline: none;
    }

    .Select__indicator-separator {
        display: none;
    }

    .Select__menu {
        color: #3c3d3e;
    }
`;