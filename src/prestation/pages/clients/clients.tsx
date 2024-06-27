import React, { useEffect, useState } from "react";
import Table from "../../components/table/table";
import { Container } from "./style";
import { PersonResponse } from "../../../core/entities/person/person";
import { getPerson } from "../../../api/services/person/person-services";

const columns = [
    { key: 'nome', header: 'Nome' },
    { key: 'cpf', header: 'CPF/CNPJ' },
    { key: 'email', header: 'EMAIL' },
    { key: 'active', header: 'Ativo' },
];

const Clients = () => {
    const [clients, setClients] = useState<PersonResponse[]>([])

    const getClientsAsync = async () => {
        try {
            const response = await getPerson({
                is_client: true
            })

            setClients(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getClientsAsync();
    }, [])

    return (
        <Container>
            <Table columns={columns} lines={clients} />
        </Container>
    )
}

export default Clients;