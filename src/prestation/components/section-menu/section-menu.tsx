import React from "react";
import { Container, ContainerIcon, ContainerText, Text } from "./style";
import { useNavigate } from "react-router-dom";

interface SectionMenuProps {
    text: string;
    icon: React.ReactElement;
    path: string;
    collapsed: boolean;
}

const SectionMenu: React.FC<SectionMenuProps> = (props) => {
    const navigate = useNavigate();

    const onClickSection = () => {
        navigate(props.path);
    }

    return (
        <Container onClick={onClickSection}>
            <ContainerIcon>
                {props.icon}
            </ContainerIcon>
            <ContainerText collapsed={props.collapsed}>
                <Text>
                    {props.text}
                </Text>
            </ContainerText>
        </Container>
    )
}

export default SectionMenu;