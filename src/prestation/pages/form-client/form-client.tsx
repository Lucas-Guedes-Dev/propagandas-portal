import React, { useCallback, useEffect, useState } from "react";
import { ButtonCommit, Container } from "./style";
import { useParams } from "react-router-dom";
import { PutPerson, getPerson } from "../../../api/services/person/person-services";
import { Input } from "../../components/input/input";
import { Card, CardBody, CardFooter, CardHeader, TitleCard, CardLine, CardColumn } from "../../utils/global-styles";
import Checkbox from "../../checkbox/checkbox";
import { PersonResponse } from "../../../core/entities/person/person";

const FormClient: React.FC = () => {
    const { client_id } = useParams();
    const [active, setActive] = useState<boolean>(true);
    const [cpf, setCpf] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [neighborhood, setNeighborhood] = useState<string>();
    const [nome, setNome] = useState<string>();
    const [number, setNumber] = useState<string>();
    const [phone, setPhone] = useState<string>();
    const [road, setRoad] = useState<string>();
    const [city, setCity] = useState<string>();
    const [state, setState] = useState<string>();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [isCnpj, setIsCnpj] = useState<boolean>(false);

    const getPersonAsync = useCallback(async () => {
        try {
            const response = await getPerson({
                id: client_id
            });

            if (response) {
                setActive(response[0].active)
                setCpf(response[0].cpf)
                setEmail(response[0].email)
                setNeighborhood(response[0].neighborhood)
                setNome(response[0].nome)
                setNumber(response[0].number)
                setPhone(response[0].phone)
                setRoad(response[0].road)
                setState(response[0].state)
                setCity(response[0].city)
            }

        } catch (error: any) {
            console.log(error);
        }
    }, [client_id]);

    const sendClient = async () => {
        try {
            const sendObject: PersonResponse = {
                active: active,
                city: city,
                cpf: cpf,
                email: email,
                is_client: true,
                is_driver: false,
                is_employee: false,
                neighborhood: neighborhood,
                nome: nome,
                number: number,
                phone: phone,
                road: road,
                state: state,
                user_id: null
            }

            if (isUpdate) {
                const response = await PutPerson(sendObject, { id: client_id })
                console.log(response)
            } else {
                console.log('create')
            }

        } catch (error: any) {
            console.log(error)
        }

    }

    useEffect(() => {
        if (client_id) {
            getPersonAsync();
            setIsUpdate(true)
        }
    }, [getPersonAsync, client_id]);

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
                    <CardLine>
                        <Input label="Telefone" onChangeValue={(text) => { setPhone(text) }} type="text" value={phone} />
                        <Input label="Estado" onChangeValue={(text) => { setState(text) }} type="text" value={state} />
                        <Input label="Cidade" onChangeValue={(text) => { setCity(text) }} type="text" value={city} />
                    </CardLine>
                    <CardLine>
                        <Input label="Biarro" onChangeValue={(text) => { setNeighborhood(text) }} type="text" value={neighborhood} />
                        <Input label="Rua" onChangeValue={(text) => { setRoad(text) }} type="text" value={road} />
                        <Input label="Numero" onChangeValue={(text) => { setNumber(text) }} type="text" value={number} />
                    </CardLine>
                </CardBody>
                <CardFooter>
                    <CardColumn>
                        <Checkbox label="Ativo" checked={active} onChange={(check) => setActive(check)} />
                    </CardColumn>
                    <CardColumn />
                    <CardColumn style={{ justifyContent: 'flex-end', paddingRight: 5 }} >
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