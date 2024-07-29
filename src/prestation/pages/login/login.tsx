import React, { useState } from "react";
import { Container, ContainerElements, ContainerForm, ContainerImage, ContainerInputs, ContainerTitleLogin, TitleLogin } from "./style";
import imgLogin from '../../assets/LOGO.svg';
import InputLogin from "../../components/input-login/input-login";
import { login } from "../../../api/services/auth/auth-service";
import MovingImage from "../../components/moving-image/moving-image";
import { Button } from "../../components/button/button";
import { toast } from 'react-toastify';
import { AuthResponse } from "../../../core/entities/auth/auth";
import { usePage } from "../../../store/last-page";
import { useNavigate } from "react-router-dom";
import { movingImage } from "../../utils/styled-utils";

const Login: React.FC = () => {
    const [offset, setOffset] = useState({ offsetX: 0, offsetY: 0 });
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { page } = usePage();
    const navigate = useNavigate();

    const onClickLogin = async () => {
        try {
            const response: AuthResponse = await login({
                password: password,
                username: username
            });

            if (response.access) {
                localStorage.setItem('token', response.access_token);
                navigate(page);
            }
        } catch (error: any) {
            console.log()
            if (error.code === "ECONNABORTED") {
                toast('API não conectada, por favor entre em contato com o suporte', {
                    type: 'error'
                });
            } else if (error.response.status === 401) {
                toast('Usuário ou senha inválidos.', {
                    type: 'error'
                });
            }
        }
    };

    return (
        <Container>
            <ContainerForm>
                <ContainerImage onMouseMove={(event) => setOffset(movingImage(event))}>
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

        </Container>
    );
}

export default Login;
