import React, { useCallback, useEffect, useState } from "react";
import { BodyForm, ButtonCommit, Container, FooterForm, HeaderForm, LineForm } from "./style";
import { useParams } from "react-router-dom";
import { PostPerson, PutPerson, getPerson } from "../../../api/services/person/person-services";
import { Input } from "../../components/input/input";
import { PersonResponse } from "../../../core/entities/person/person";
import { toast } from "react-toastify";
import Toggle from "../../components/toggle/toggle";

const FormDriver: React.FC = () => {
    const { driver_id } = useParams();
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
                id: driver_id
            });

            if (response) {
                setActive(response[0].active)
                setCpf(response[0].cpf_cnpj)
                setEmail(response[0].email)
                setNeighborhood(response[0].neighborhood)
                setNome(response[0].name)
                setNumber(response[0].number)
                setPhone(response[0].phone)
                setRoad(response[0].road)
                setState(response[0].state)
                setCity(response[0].city)
            }

        } catch (error: any) {
            console.log(error);
        }
    }, [driver_id]);

    const sendClient = async () => {
        try {
            const sendObject: PersonResponse = {
                active: active,
                city: city,
                cpf_cnpj: cpf,
                email: email,
                is_client: false,
                is_driver: true,
                is_employee: false,
                neighborhood: neighborhood,
                name: nome,
                number: number,
                phone: phone,
                road: road,
                state: state,
                user_id: null
            }

            if (isUpdate) {
                await PutPerson(sendObject, { id: driver_id })
                toast.success('Foi alterado com sucesso!')
            } else {
                await PostPerson(sendObject);
                toast.success('Foi inserido com sucesso!')
            }

        } catch (error: any) {
            toast.error('Não foi possível inserir ou alterar a informação')
        }

    }

    useEffect(() => {
        if (driver_id) {
            getPersonAsync();
            setIsUpdate(true)
        } else {
            setIsUpdate(false)
        }
    }, [getPersonAsync, driver_id]);

    return (
        <Container>
            <BodyForm>
                <HeaderForm>
                    <h2>Motorista</h2>
                </HeaderForm>

                <LineForm>
                    <Input label="Nome" onChangeValue={(text) => { setNome(text) }} type="text" value={nome} />
                    <Input
                        label="Cpf/Cnpj"
                        onChangeValue={(text) => { setCpf(text) }}
                        type="text" value={cpf} />
                    <Input label="E-mail" onChangeValue={(text) => { setEmail(text) }} type="text" value={email} />
                </LineForm>
                <LineForm>
                    <Input label="Telefone" onChangeValue={(text) => { setPhone(text) }} type="text" value={phone} />
                    <Input label="Estado" onChangeValue={(text) => { setState(text) }} type="text" value={state} />
                    <Input label="Cidade" onChangeValue={(text) => { setCity(text) }} type="text" value={city} />
                </LineForm>
                <LineForm>
                    <Input label="Bairro" onChangeValue={(text) => { setNeighborhood(text) }} type="text" value={neighborhood} />
                    <Input label="Rua" onChangeValue={(text) => { setRoad(text) }} type="text" value={road} />
                    <Input label="Numero" onChangeValue={(text) => { setNumber(text) }} type="text" value={number} />
                </LineForm>
                <FooterForm>
                    <LineForm style={{ justifyContent: 'flex-end', paddingRight: 5 }} >
                        <Toggle text="Ativo" onCheckedChange={() => setActive(!active)} isChecked={active} />
                        <ButtonCommit onClick={sendClient}>
                            Enviar
                        </ButtonCommit>
                    </LineForm>
                </FooterForm>
            </BodyForm>
        </Container>
    )
}

export default FormDriver;