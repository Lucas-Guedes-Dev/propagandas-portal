import React, { useState } from "react";
import { Container, ContainerElements, ContainerForm, ContainerImage, ContainerInputs, ContainerTitleLogin, TitleLogin } from "./style";
import imgLogin from '../../assets/LOGO.svg';
import InputLogin from "../../components/input-login/input-login";
import { login } from "../../../api/services/auth-service";
import MovingImage from "../../components/moving-image/moving-image";
import { Button } from "../../components/button/button";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToken } from "../../../store/auth-token";
import { AuthResponse } from "../../../core/entities/auth";
import { usePage } from "../../../store/last-page";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { page } = usePage();
    const { setToken } = useToken();
    const navigate = useNavigate();

    const handleMouseMove = (e: React.MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        const offsetX = (window.innerWidth / 2 - x) / 20;
        const offsetY = (window.innerHeight / 2 - y) / 20;

        setOffset({ offsetX, offsetY });
    };

    const onClickLogin = async () => {
        try {
            const response: AuthResponse = await login({
                password: password,
                username: username
            });

            if (response.access) {
                setToken(response.access_token);
                navigate(page);
            }
        } catch (error: any) {
            if (error.response.status === 401) {
                toast('Usuário ou senha inválidos.', {
                    type: 'error'
                });
            }
        }
    };

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
                <ContainerElements>
                    <ContainerTitleLogin>
                        <TitleLogin>
                            Login
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
                    <Button onPress={onClickLogin} text="Login" />
                </ContainerElements>
            </ContainerForm>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </Container>
    );
}

export default Login;
