import React from "react";
import { Container, Text } from "./style";

interface ButtonProps {
    text: string;
    onPress: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {

    const onClickButton = () => {
        props.onPress();
    }

    return (
        <Container onClick={onClickButton}>
            <Text>
                {props.text}
            </Text>
        </Container>
    )
}