import React, { useState } from "react";
import { Body, ButtonCollapsed, Container, ContainerLogo, Header } from "./style";
import { FaChevronLeft } from "react-icons/fa6";
import { useTheme } from "styled-components";
import imgAction from '../../assets/LOGOLIGHT.svg';

const SideMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const theme = useTheme();

    return (
        <Container collapsed={collapsed}>
            <Header>
                <ContainerLogo>
                    <img
                        src={imgAction}
                        width={'70%'}
                    />
                </ContainerLogo>
                <ButtonCollapsed collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
                    <FaChevronLeft color={theme.colors.backgroundLogin} size={30} />
                </ButtonCollapsed>
            </Header>
            <Body>

            </Body>
        </Container>
    )
}

export default SideMenu;