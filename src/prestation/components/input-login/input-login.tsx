import React from "react";
import { Container, ContainerIcon, ContainerInput, Input } from "./style";
import { useTheme } from "styled-components";
import { FaLock, FaUser } from "react-icons/fa";

interface InputLoginProp {
    onChangeText: (text: string) => void;
    icon: "user" | "lock";
    placeholder: string;
    text: string;
    type?: string | 'text';
}

const InputLogin: React.FC<InputLoginProp> = (props) => {
    const theme = useTheme();

    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChangeText(event.target.value);
    }

    return (
        <Container>
            <ContainerIcon>
                {props.icon === 'lock' ? (
                    <FaLock size={20} color={theme.colors.text} />
                ) : (
                    <FaUser size={20} color={theme.colors.text} />
                )}
            </ContainerIcon>
            <ContainerInput>
                <Input
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.text}
                    onChange={(event) => onChangeText(event)}
                />
            </ContainerInput>
        </Container>
    )
}

export default InputLogin;