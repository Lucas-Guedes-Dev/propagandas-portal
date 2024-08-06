import React, { useEffect, useState } from "react";
import Table from "../../components/table/table";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import FilterAccordion from "../../components/filter-accordion/FilterAccordion";
import { GetAds } from "../../../api/services/ads/ads-service";
import { AdsResponse } from "../../../core/entities/ads/ads";

const columns = [
    { key: 'nome', header: 'Nome' },
    { key: 'image', header: 'Image' },
    { key: 'active', header: 'Ativo' },
    { key: 'id', header: 'Editar' },
];

const ListAds = () => {
    const [ads, setAds] = useState<AdsResponse[]>([])

    const navigate = useNavigate();

    const getAdsAsync = async () => {
        try {
            const response = await GetAds({
                active: true
            });

            setAds(response);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAdsAsync();
    }, [])

    // const onEditClicked = (id: number) => {
    //     navigate(`/editar/cliente/${id}`)
    // }

    return (
        <Container>
            <FilterAccordion title="Ações" onNewClicked={() => { navigate('/novo/propaganda') }} />
            <Table onEdit={(id) => console.log(id)} columns={columns} lines={ads} />
        </Container>
    )
}

export default ListAds;