import React, { useCallback, useEffect, useState } from "react";
import Table from "../../components/table/table";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import FilterAccordion from "../../components/filter-accordion/FilterAccordion";
import { GetUser } from "../../../api/services/users/user-services";
import { UserResponseType } from "../../../core/entities/user/user";

const columns = [
    { key: 'username', header: 'Usuário' },
    { key: 'active', header: 'Ativo' },
    { key: 'id_user', header: 'Editar' },
];

const ListUsers: React.FC = () => {
    const [users, setUsers] = useState<UserResponseType[]>([])

    const navigate = useNavigate();

    const getUserAsync = useCallback(async () => {
        try {
            const response = await GetUser({});
            setUsers(response);
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        getUserAsync();
    }, [])

    const onEditClicked = (id: number) => {
        navigate(`/editar/usuario/${id}`)
    }

    return (
        <Container>
            <FilterAccordion title="Ações" onNewClicked={() => { navigate('/novo/usuario') }} />
            <Table onEdit={(id) => onEditClicked(id)} columns={columns} lines={users} />
        </Container>
    )
}

export default ListUsers;