import React from "react";
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon, Label, ContainerLabel, ContainerStyledCheckBox } from "./style";

interface CheckBoxProps {
    checked: boolean;
    label: string;
    onChange: (value: boolean) => void;
}

const Checkbox: React.FC<CheckBoxProps> = (props) => {

    const onChangebox = () => {
        props.onChange(!props.checked);
    }

    return (
        <CheckboxContainer onClick={() => onChangebox()}>
            <ContainerStyledCheckBox>
                <HiddenCheckbox checked={props.checked} />
                <StyledCheckbox checked={props.checked}>
                    <Icon viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </StyledCheckbox>
            </ContainerStyledCheckBox>
            <ContainerLabel>
                <Label>
                    {props.label}
                </Label>
            </ContainerLabel>
        </CheckboxContainer>
    )
}

export default Checkbox;

