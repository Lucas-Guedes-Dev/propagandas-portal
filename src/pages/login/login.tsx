import React, { useState } from "react";
import { Container, ContainerElements, ContainerForm, MovingImage } from "./style";
import imgLogin from '../../assets/pagina-de-login.png';

const Login: React.FC = () => {

    const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        const offsetX = (window.innerWidth / 2 - x) / 20;
        const offsetY = (window.innerHeight / 2 - y) / 20;

        setOffset({ offsetX, offsetY });
    };

    return (
        <Container>
            <ContainerForm>
                <ContainerElements onMouseMove={handleMouseMove}>
                    <MovingImage
                        src={imgLogin}
                        alt="Imagem que se move"
                        offsetX={offset.offsetX}
                        offsetY={offset.offsetY}
                    />
                </ContainerElements>
                <ContainerElements></ContainerElements>
            </ContainerForm>
        </Container>
    );
}

export default Login;