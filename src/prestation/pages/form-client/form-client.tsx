import React, { useCallback, useEffect, useState } from "react";
import { ButtonCommit, Container } from "./style";
import { useParams } from "react-router-dom";
import { getPerson } from "../../../api/services/person/person-services";
import { PersonResponse } from "../../../core/entities/person/person";
import { Input } from "../../components/input/input";
import { Card, CardBody, CardFooter, CardHeader, TitleCard, CardLine } from "../../utils/global-styles";

export const EditClient: React.FC = () => {
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

    useEffect(() => {
        if (client_id) {
            getPersonAsync();
            setIsUpdate(true)
        }
    }, [getPersonAsync]);

    return (
        <Container>
            <Card>
                <CardHeader style={{ paddingLeft: '30px' }}>
                    <TitleCard>Clientes</TitleCard>
                </CardHeader>
                <CardBody>
                    <CardLine>
                        <Input label="Nome" onChangeValue={(text) => { setNome(text) }} type="text" value={nome} />
                        <Input mask={[/\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, ".", /\d/, /\d/, /\d/, "-", /\d/, /\d/]}
                            label="Cpf" onChangeValue={(text) => { setCpf(text) }} type="text" value={cpf} />
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
                <CardFooter style={{ paddingRight: '30px' }}>
                    <ButtonCommit>
                        Enviar
                    </ButtonCommit>
                </CardFooter>
            </Card>
        </Container>
    )
}