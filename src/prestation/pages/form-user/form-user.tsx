import React, { useCallback, useEffect, useState } from "react";
import { ButtonCommit, Container } from "./style";
import { useParams } from "react-router-dom";
import { Input } from "../../components/input/input";
import { Card, CardBody, CardFooter, CardHeader, TitleCard, CardLine, CardColumn } from "../../utils/global-styles";
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

    const getUserAsync = async () => {
        try {
            const response = await GetUser({
                id_user: user_id
            });
            console.log(response)
            setUsername(response[0].username)
            setIsAdmin(response[0].is_admin)
            setActive(response[0].active)
        } catch (error: any) {
            console.log(error.response)
            toast.error('Algo aconteceu de errado, por favor tente novamente mais tarde.')
        }
    };

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

    useEffect(() => {
        if (user_id) {
            setIsUpdate(true)
            getUserAsync();
        } else {
            setIsUpdate(false)
        }
    }, [user_id]);

    return (
        <Container>
            <Card>
                <CardHeader style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TitleCard>Usuário do sistema</TitleCard>
                </CardHeader>
                <CardBody style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <CardLine style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                        <Input label="Usuário" onChangeValue={(text) => { setUsername(text) }} type="text" value={username} />
                    </CardLine>
                    <CardLine style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                        <Input label="Senha" onChangeValue={(text) => { setPassword(text) }} type="text" value={''} />
                    </CardLine>
                </CardBody>
                <CardFooter >
                    <CardColumn style={{ justifyContent: 'center', paddingRight: 5 }} >
                        <Toggle text="Ativo" onCheckedChange={() => setActive(!active)} isChecked={active} />
                        <ButtonCommit onClick={sendUser}>
                            Enviar
                        </ButtonCommit>
                    </CardColumn>
                </CardFooter>
            </Card>
        </Container>
    )
}

export default FormUser;