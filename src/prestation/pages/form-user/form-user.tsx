import React, { useCallback, useEffect, useState } from "react";
import { BodyForm, ButtonCommit, Container, FooterForm, HeaderForm, LineForm } from "./style";
import { useParams } from "react-router-dom";
import { Input } from "../../components/input/input";
import { toast } from "react-toastify";
import Toggle from "../../components/toggle/toggle";
import { GetUser, PostUser } from "../../../api/services/users/user-services";
import { UserResponseType } from "../../../core/entities/user/user";

const FormUser: React.FC = () => {
    const { user_id } = useParams();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(true);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [username, setUsername] = useState<string>('');

    const getUserAsync = useCallback(async () => {
        try {
            const response = await GetUser({
                id_user: user_id
            });
            setUsername(response[0].username)
            setIsAdmin(response[0].is_admin)
            setActive(response[0].active)
        } catch (error: any) {
            toast.error('Algo aconteceu de errado, por favor tente novamente mais tarde.')
        }
    }, [username, isAdmin, active]);

    useEffect(() => {
        if (user_id) {
            setIsUpdate(true)
            getUserAsync();
        } else {
            setIsUpdate(false)
        }
    }, [getUserAsync, user_id]);

    const sendUser = async () => {
        try {
            const dataUser: UserResponseType = {
                active: active,
                is_admin: isAdmin,
                username: username,
                password: password
            }

            if (isUpdate) {
                toast.success('Foi alterado com sucesso!')
            } else {
                PostUser(dataUser)
                toast.success('Foi inserido com sucesso!')
            }

        } catch (error: any) {
            toast.error('Não foi possível inserir ou alterar a informação')
        }
    }


    return (
        <Container>
            <BodyForm>
                <HeaderForm>
                    <h2>Usuário</h2>
                </HeaderForm>
                <LineForm>
                    <Input label="Usuário" onChangeValue={(text) => { setUsername(text) }} type="text" value={username} />
                    <Input label="Senha" onChangeValue={(text) => { setPassword(text) }} type="text" value={''} />
                </LineForm>

                <FooterForm >
                    <LineForm style={{ justifyContent: 'flex-end', paddingRight: 5 }} >
                        <Toggle text="Admin" onCheckedChange={() => setIsAdmin(!isAdmin)} isChecked={isAdmin} />

                        <Toggle text="Ativo" onCheckedChange={() => setActive(!active)} isChecked={active} />
                        <ButtonCommit onClick={sendUser}>
                            Enviar
                        </ButtonCommit>
                    </LineForm>
                </FooterForm>
            </BodyForm>
        </Container >
    )
}

export default FormUser;