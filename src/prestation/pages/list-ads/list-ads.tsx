import React, { useEffect, useState } from "react";
import Table from "../../components/table/table";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";

const columns = [
    { key: 'nome', header: 'Nome' },
    { key: 'image', header: 'Image' },
    { key: 'active', header: 'Ativo' },
    { key: 'id', header: 'Editar' },
];

const ListAds = () => {
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

export default ListAds;