import React, { useEffect, useState } from "react";
import Table from "../../components/table/table";
import { Container } from "./style";
import { PersonResponse } from "../../../core/entities/person/person";
import { getPerson } from "../../../api/services/person/person-services";
import { useNavigate } from "react-router-dom";

const columns = [
    { key: 'nome', header: 'Nome' },
    { key: 'cpf', header: 'CPF/CNPJ' },
    { key: 'email', header: 'EMAIL' },
    { key: 'active', header: 'Ativo' },
    { key: 'id', header: 'Editar' },
];

const ListClients = () => {
    const [clients, setClients] = useState<PersonResponse[]>([])

    const navigate = useNavigate();

    const getClientsAsync = async () => {
        try {
            const response = await getPerson({
                is_client: true
            });

            setClients(response);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getClientsAsync();
    }, [])

    const onEditClicked = (id: number) => {
        navigate(`/editar/cliente/${id}`)
    }

    return (
        <Container>
            <Table onEdit={(id) => onEditClicked(id)} columns={columns} lines={clients} />
        </Container>
    )
}

export default ListClients;