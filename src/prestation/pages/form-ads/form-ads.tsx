import React, { useEffect, useState } from "react";
import { BodyForm, ButtonCommit, CollumnForm, Container, FooterForm, HeaderForm, LineForm } from "./style";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Toggle from "../../components/toggle/toggle";
import { Input } from "../../components/input/input";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import TextArea from "../../components/TextArea/TextArea";
import Select, { OptionsInterface } from "../../components/Select/Select";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { getPerson } from "../../../api/services/person/person-services";
import { DataAds } from "../../../core/entities/ads/ads";
import { CreateAds, GetAds } from "../../../api/services/ads/ads-service";
import { PersonParam } from "../../../core/entities/person/person";
import dayjs from "dayjs";

const FormAds: React.FC = () => {
    const { ads_id } = useParams();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [urlVideo, setUrlVideos] = useState<string>('');
    const [initDate, setInitDate] = useState<string | null>('');
    const [endDate, setEndDate] = useState<string | null>('');
    const [imageB64, setImageB64] = useState<string>('');
    const [partner, setPartner] = useState<OptionsInterface>({} as OptionsInterface);
    const [options, setOptions] = useState<OptionsInterface[]>([]);
    const [clientId, setClientId] = useState<string>();

    const getClients = async () => {
        try {
            let param: PersonParam = {
                is_client: true
            }

            if (clientId) {
                param.id = clientId
            }

            const response = await getPerson(param);

            if (response && !clientId) {
                let newOptions: OptionsInterface[] = [];
                response.forEach((item) => {

                    newOptions.push({
                        label: item.name || '',
                        value: item.id?.toString() || ''
                    });
                });
                setOptions(newOptions);
            } else if (response && clientId) {

                let newOption: OptionsInterface = {
                    label: response[0].name || "",
                    value: response[0].id?.toString() || ''
                }

                setPartner(newOption);
            }

        } catch (error) {
            throw error;
        }
    };

    const getAdsAsync = async () => {
        try {
            const response = await GetAds({
                id: ads_id
            });
            console.log(response)
            if (response.length > 0) {
                setActive(response[0].active)
                setImageB64(response[0].image)
                setInitDate(response[0].date_start)
                setEndDate(response[0].date_end)
                setUrlVideos(response[0].video_url)
                setName(response[0].name)
                setDescription(response[0].description)
                setClientId(response[0].person_id.toString())
            }
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        if (ads_id) {
            setIsUpdate(true);
            getAdsAsync();
        } else {
            setIsUpdate(false);
        }

        getClients();
    }, [ads_id]);

    useEffect(() => {
        getClients()
    }, [clientId])

    const convertDate = (date: string) => {
        return dayjs(date);
    }

    const sendAds = async () => {

        const adsObject: DataAds = {
            active: active,
            date_end: endDate,
            date_start: initDate,
            image: imageB64,
            name: name,
            person_id: Number(partner.value),
            description: description,
            video_url: urlVideo
        }

        try {
            if (isUpdate) {
                toast.success('Foi alterado com sucesso!')
            } else {
                await CreateAds(adsObject);
                toast.success('Foi inserido com sucesso!')
            }

        } catch (error: any) {
            toast.error('Não foi possível inserir ou alterar a informação')
        }
    };

    return (
        <Container>
            <HeaderForm>
                <h2>Propagandas</h2>
            </HeaderForm>
            <BodyForm>
                <CollumnForm>
                    <LineForm>
                        <Input
                            label="Nome:"
                            onChangeValue={(text: string) => { setName(text) }}
                            type="text"
                            value={name}
                        />
                        <Select
                            description="Selecione o cliente: "
                            onChangeValue={(value) => { setPartner(value) }}
                            options={options}
                            value={partner}
                        />
                    </LineForm>
                    <LineForm>
                        <Input
                            label="URL do Video:"
                            onChangeValue={(text: string) => { setUrlVideos(text) }}
                            type="text" value={urlVideo}
                        />
                    </LineForm>
                    <LineForm style={{ flex: 2 }}>
                        <TextArea
                            placeholder="Escreva aqui..."
                            description="Descrição"
                            onChangeValue={(text) => setDescription(text)}
                            value={description} />
                    </LineForm>
                    <LineForm>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker
                                value={convertDate(initDate || '')}
                                onChange={(date) => setInitDate(date?.toISOString() || null)}
                                label="Data de inicio"
                            />
                            <DatePicker
                                value={convertDate(endDate || '')}
                                onChange={(date) => setEndDate(date?.toISOString() || null)}
                                label="Data de fim"
                            />
                        </LocalizationProvider>
                    </LineForm>
                </CollumnForm>
                <CollumnForm>
                    <LineForm>
                        <ImageUploader imageProp={imageB64 || null} onImageDrop={(image) => setImageB64(image || '')} />
                    </LineForm>
                </CollumnForm>
            </BodyForm>

            <FooterForm>
                <LineForm style={{ justifyContent: 'flex-end', paddingRight: 5 }} >
                    <Toggle text="Ativo" onCheckedChange={() => setActive(!active)} isChecked={active} />
                    <ButtonCommit onClick={sendAds}>
                        Enviar
                    </ButtonCommit>
                </LineForm>
            </FooterForm>
        </Container>
    )
}

export default FormAds;
