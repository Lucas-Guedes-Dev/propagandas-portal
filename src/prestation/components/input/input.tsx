import React from "react";
import { Container, ContainerLabel, InputMask, InputText, Label } from "./style";

interface InputProps {
    label: string;
    value: any;
    onChangeValue: (value: any) => void;
    type: string;
    width?: string;
    flex?: string;
    mask?: Array<string | RegExp>;
}

export const Input: React.FC<InputProps> = (props) => {
    const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChangeValue(event.target.value);
    };

    return (
        <Container width={props.width} flex={props.flex}>
            <ContainerLabel>
                <Label>{props.label}</Label>
            </ContainerLabel>
            {props.mask ? (
                <InputMask
                    mask={props.mask}
                    type={props.type}
                    value={props.value}
                    onChange={onChangeText}
                    render={(ref: any, props: any) => <InputText ref={ref} {...props} />}
                />
            ) : (
                <InputText
                    type={props.type}
                    value={props.value}
                    onChange={onChangeText}
                />
            )}
        </Container>
    );
};
