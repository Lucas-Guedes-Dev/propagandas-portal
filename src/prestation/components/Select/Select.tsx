import React from "react";
import { Container, Label, StyledSelect } from "./style";

interface SelectProps {
    value: string;
    description: string;
    onChangeValue: (text: string) => void;
    options: options[];
}

interface options {
    value: string;
    label: string;
}

const Select: React.FC<SelectProps> = (props) => {

    return (
        <Container>
            <Label>
                {props.description}
            </Label>
            <StyledSelect
                value={props.value}
                options={props.options}
                onChange={(event: any) => { props.onChangeValue(event.target.value) }}
            />
        </Container>
    )
};

export default Select;