import React from "react";
import { Container, Label, StyledSelect } from "./style";

interface SelectProps {
    value: OptionsInterface;
    description: string;
    onChangeValue: (value: OptionsInterface) => void;
    options: OptionsInterface[];
}

export interface OptionsInterface {
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
                onChange={(event: any) => { props.onChangeValue(event) }}
            />
        </Container>
    )
};

export default Select;