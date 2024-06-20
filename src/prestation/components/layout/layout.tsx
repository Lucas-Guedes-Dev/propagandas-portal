import React, { ReactNode } from "react";
import { Container, ContainerBody, ContainerHeaderBody } from "./styled";
import SideMenu from "../sidemenu/sidemenu";
import Header from "../header/header";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Container>
            <SideMenu />

            <ContainerHeaderBody>
                <Header />
                <ContainerBody>
                    {children}
                </ContainerBody>
            </ContainerHeaderBody>
        </Container>
    )
}

export default Layout;