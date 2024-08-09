import React from "react";
import { Container, Label, TextAreaInput } from "./style";

interface TextAreaProps {
    value: string;
    description: string;
    onChangeValue: (text: string) => void;
    placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = (props) => {

    return (
        <Container>
            <Label>
                {props.description}
            </Label>
            <TextAreaInput
                placeholder={props.placeholder}
                value={props.value}
                onChange={(event) => { props.onChangeValue(event.target.value) }}
            />
        </Container>
    )
};

export default TextArea;