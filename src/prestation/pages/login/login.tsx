import React, { useState } from "react";
import { Container, ContainerElements, ContainerForm, ContainerImage, ContainerInputs, ContainerTitleLogin, MovingImage, TitleLogin } from "./style";
import imgLogin from '../../assets/pagina-de-login.png';
import InputLogin from "../../components/input-login/input-login";
import { fecthAuthLogin } from "../../../api/services/auth-service";

const Login: React.FC = () => {

    const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        const offsetX = (window.innerWidth / 2 - x) / 20;
        const offsetY = (window.innerHeight / 2 - y) / 20;

        setOffset({ offsetX, offsetY });
    };

    const onClickLogin = async () => {
        const response = await fecthAuthLogin(
            {
                password: password,
                username: username
            }
        )
        console.log(response, 'ola');
    }

    return (
        <Container>
            <ContainerForm>
                <ContainerImage onMouseMove={handleMouseMove}>
                    <MovingImage
                        src={imgLogin}
                        alt="Imagem que se move"
                        offsetX={offset.offsetX}
                        offsetY={offset.offsetY}
                    />
                </ContainerImage>
                <ContainerElements >
                    <ContainerTitleLogin>
                        <TitleLogin>
                            Action Login
                        </TitleLogin>
                    </ContainerTitleLogin>
                    <ContainerInputs>
                        <InputLogin
                            icon="user"
                            onChangeText={(text) => { setUsername(text) }}
                            placeholder="Usuário"
                            text={username}
                        />

                        <InputLogin
                            icon="lock"
                            onChangeText={(text) => { setPassword(text) }}
                            placeholder="Senha"
                            text={password}
                            type="password"
                        />
                    </ContainerInputs>
                    <button onClick={onClickLogin}>login</button>
                </ContainerElements>
            </ContainerForm>
        </Container>
    );
}

export default Login;