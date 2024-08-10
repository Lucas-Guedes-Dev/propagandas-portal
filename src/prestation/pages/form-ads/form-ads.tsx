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

const FormAds: React.FC = () => {
    const { client_id } = useParams();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('');
    const [partner, setPartner] = useState<OptionsInterface>({} as OptionsInterface);
    const [options, setOptions] = useState<OptionsInterface[]>([]);

    const getClients = async () => {
        try {
            const response = await getPerson({
                is_client: true
            });

            if (response) {
                let newOptions: OptionsInterface[] = [];
                response.forEach((item) => {

                    newOptions.push({
                        label: item.name || '',
                        value: item.id?.toString() || ''
                    });
                });
                console.log(newOptions);
                setOptions(newOptions);
            }

        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        if (client_id) {
            setIsUpdate(true);
        } else {
            setIsUpdate(false);
        }

        getClients();
    }, [client_id]);

    const sendClient = async () => {
        try {
            if (isUpdate) {
                toast.success('Foi alterado com sucesso!')
            } else {
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
                        <Input label="Nome:" onChangeValue={(text: string) => { console.log('teste') }} type="text" value={''} />
                        <Select description="Selecione o cliente: " onChangeValue={(value) => { setPartner(value) }} options={options} value={partner} />
                    </LineForm>
                    <LineForm>
                        <Input label="URL do Video:" onChangeValue={(text: string) => { console.log('teste') }} type="text" value={''} />
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
                            <DatePicker onChange={() => { }} label="Data de inicio" />
                            <DatePicker onChange={() => { }} label="Data de fim" />
                        </LocalizationProvider>
                    </LineForm>
                </CollumnForm>
                <CollumnForm>

                    <LineForm>
                        <ImageUploader />
                    </LineForm>
                </CollumnForm>
            </BodyForm>

            <FooterForm>
                <LineForm style={{ justifyContent: 'flex-end', paddingRight: 5 }} >
                    <Toggle text="Ativo" onCheckedChange={() => setActive(!active)} isChecked={active} />
                    <ButtonCommit onClick={sendClient}>
                        Enviar
                    </ButtonCommit>
                </LineForm>
            </FooterForm>
        </Container>
    )
}

export default FormAds;
