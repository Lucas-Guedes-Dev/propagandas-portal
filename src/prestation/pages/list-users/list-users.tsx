import React, { useEffect, useState } from "react";
import Table from "../../components/table/table";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

const columns = [
    { key: 'username', header: 'Usuário' },
    { key: 'active', header: 'Ativo' },
    { key: 'id', header: 'Editar' },
];

const ListUsers: React.FC = () => {
    const [users, setUsers] = useState([])

    const navigate = useNavigate();

    const getUserAsync = async () => {
        try {
            // const response = await getPerson({
            //     is_client: true
            // });

            // setUsers(response);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserAsync();
    }, [])

    // const onEditClicked = (id: number) => {
    //     navigate(`/editar/cliente/${id}`)
    // }

    return (
        <Container>
            <Table onEdit={(id) => console.log(id)} columns={columns} lines={users} />
        </Container>
    )
}

export default ListUsers;