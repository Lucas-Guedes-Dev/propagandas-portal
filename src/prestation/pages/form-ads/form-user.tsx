import React, { useCallback, useEffect, useState } from "react";
import { ButtonCommit, Container } from "./style";
import { useParams } from "react-router-dom";
import { PostPerson, PutPerson, getPerson } from "../../../api/services/person/person-services";
import { Input } from "../../components/input/input";
import { Card, CardBody, CardFooter, CardHeader, TitleCard, CardLine, CardColumn } from "../../utils/global-styles";
import Checkbox from "../../components/checkbox/checkbox";
import { PersonResponse } from "../../../core/entities/person/person";
import { toast } from "react-toastify";
import Toggle from "../../components/toggle/toggle";

const FormClient: React.FC = () => {
    const { client_id } = useParams();
    const [active, setActive] = useState<boolean>(true);
    const [cpf, setCpf] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [nome, setNome] = useState<string>();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);

    const getAdsAsync = useCallback(async () => {
        try {

        } catch (error: any) {
            console.log(error);
        }
    }, [client_id]);

    const sendClient = async () => {
        try {
            if (isUpdate) {
                toast.success('Foi alterado com sucesso!')
            } else {
                toast.success('Foi inserido com sucesso!')
            }

        } catch (error: any) {
            toast.error('Não foi possível inserir ou alterar a informação')
        }

    }

    useEffect(() => {
        if (client_id) {
            getAdsAsync();
            setIsUpdate(true)
        } else {
            setIsUpdate(false)
        }
    }, [getAdsAsync, client_id]);

    return (
        <Container>
            <Card>
                <CardHeader style={{ paddingLeft: '30px' }}>
                    <TitleCard>Clientes</TitleCard>
                </CardHeader>
                <CardBody>
                    <CardLine>
                        <Input label="Nome" onChangeValue={(text) => { setNome(text) }} type="text" value={nome} />
                        <Input
                            label="Cpf/Cnpj"
                            onChangeValue={(text) => { setCpf(text) }}
                            type="text" value={cpf} />
                        <Input label="E-mail" onChangeValue={(text) => { setEmail(text) }} type="text" value={email} />
                    </CardLine>
                </CardBody>
                <CardFooter>
                    <CardColumn style={{ justifyContent: 'flex-end', paddingRight: 5 }} >
                        <Toggle text="Ativo" onCheckedChange={() => setActive(!active)} isChecked={active} />
                        <ButtonCommit onClick={sendClient}>
                            Enviar
                        </ButtonCommit>
                    </CardColumn>
                </CardFooter>
            </Card>
        </Container>
    )
}

export default FormClient;