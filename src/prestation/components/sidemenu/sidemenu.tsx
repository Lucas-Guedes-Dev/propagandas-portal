import React, { useState } from "react";
import { Body, ButtonCollapsed, Container, ContainerLogo, Header } from "./style";
import { useTheme } from "styled-components";
import imgAction from '../../assets/LOGOLIGHT.svg';
import SectionMenu from "../section-menu/section-menu";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoMegaphone } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const SideMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Container collapsed={collapsed}>
            <Header>
                <ContainerLogo onClick={() => navigate('/home')}>
                    <img
                        src={imgAction}
                        alt="logo"
                        width={'70%'}
                    />
                </ContainerLogo>
                <ButtonCollapsed collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
                    <FaChevronLeft color={theme.colors.background} size={25} />
                </ButtonCollapsed>
            </Header>
            <Body>
                <SectionMenu
                    icon={<BsFillPersonCheckFill color={theme.colors.background} size={30} />}
                    path="/clientes"
                    text="Clientes"
                    collapsed={collapsed}
                />
                <SectionMenu
                    icon={<IoMegaphone color={theme.colors.background} size={30} />}
                    path="/propagandas"
                    text="Propagandas"
                    collapsed={collapsed}
                />
                <SectionMenu
                    icon={<FaCar color={theme.colors.background} size={30} />}
                    path="/motoristas"
                    text="Motoristas"
                    collapsed={collapsed}
                />
                <SectionMenu
                    icon={<FaUsers color={theme.colors.background} size={30} />}
                    path="/usuarios"
                    text="Usuários"
                    collapsed={collapsed}
                />
            </Body>
        </Container>
    )
}

export default SideMenu;