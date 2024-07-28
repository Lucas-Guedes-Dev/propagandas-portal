import React, { useEffect, useState } from "react";
import Table from "../../components/table/table";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

const columns = [
    { key: 'username', header: 'Usuário' },
    { key: 'is_client', header: 'Cliente' },
    { key: 'is_employe', header: 'Cliente' },
    { key: 'active', header: 'Ativo' },
    { key: 'id', header: 'Editar' },
];

const ListUsers = () => {
    const [ads, setAds] = useState([])

    const navigate = useNavigate();

    const getadsAsync = async () => {
        try {
            // const response = await getPerson({
            //     is_client: true
            // });

            // setAds(response);
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect(() => {
    //     getadsAsync();
    // }, [])

    // const onEditClicked = (id: number) => {
    //     navigate(`/editar/cliente/${id}`)
    // }

    return (
        <Container>
            <Table onEdit={(id) => console.log(id)} columns={columns} lines={ads} />
        </Container>
    )
}

export default ListUsers;