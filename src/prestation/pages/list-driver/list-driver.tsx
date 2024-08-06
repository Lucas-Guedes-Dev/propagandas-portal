import React, { useEffect, useState } from "react";
import Table from "../../components/table/table";
import { Container } from "./style";
import { PersonResponse } from "../../../core/entities/person/person";
import { getPerson } from "../../../api/services/person/person-services";
import { useNavigate } from "react-router-dom";
import FilterAccordion from "../../components/filter-accordion/FilterAccordion";

const columns = [
    { key: 'name', header: 'Nome' },
    { key: 'cpf_cnpj', header: 'CPF/CNPJ' },
    { key: 'email', header: 'EMAIL' },
    { key: 'active', header: 'Ativo' },
    { key: 'id', header: 'Editar' },
];

const ListDriver: React.FC = () => {
    const [driver, setDriver] = useState<PersonResponse[]>([])

    const navigate = useNavigate();

    const getClientsAsync = async () => {
        try {
            const response = await getPerson({
                is_driver: true
            });
            console.log(response)
            setDriver(response);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getClientsAsync();
    }, [])

    const onEditClicked = (id: number) => {
        navigate(`/editar/motorista/${id}`)
    }

    return (
        <Container>
            <FilterAccordion title="Ações" onNewClicked={() => { navigate('/novo/motorista') }} />
            <Table onEdit={(id) => onEditClicked(id)} columns={columns} lines={driver} />
        </Container>
    )
}

export default ListDriver;