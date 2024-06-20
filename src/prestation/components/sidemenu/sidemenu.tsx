import React, { useState } from "react";
import { Body, ButtonCollapsed, Container, ContainerLogo, Header } from "./style";
import { FaChevronLeft } from "react-icons/fa6";
import { useTheme } from "styled-components";
import imgAction from '../../assets/LOGOLIGHT.svg';
import AcordionMenu from "../acordion-menu/acordion-menu";

const SideMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const theme = useTheme();

    return (
        <Container collapsed={collapsed}>
            <Header>
                <ContainerLogo>
                    <img
                        src={imgAction}
                        alt="logo"
                        width={'70%'}
                    />
                </ContainerLogo>
                <ButtonCollapsed collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
                    <FaChevronLeft color={theme.colors.backgroundLogin} size={30} />
                </ButtonCollapsed>
            </Header>
            <Body>
                <AcordionMenu
                    buttons={[{ path: '/login', text: 'Teste' }]}
                    defaultExpanded={false}
                    headerAccordion="Login"
                    menuExpanded={collapsed}
                />
            </Body>
        </Container>
    )
}

export default SideMenu;