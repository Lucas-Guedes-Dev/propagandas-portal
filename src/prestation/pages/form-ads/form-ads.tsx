import React, { useEffect, useState } from "react";
import { BodyForm, ButtonCommit, CollumnForm, Container, FooterForm, HeaderForm, LineForm } from "./style";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Toggle from "../../components/toggle/toggle";
import { Input } from "../../components/input/input";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import TextArea from "../../components/TextArea/TextArea";
import Select from "../../components/Select/Select";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
];

const FormAds: React.FC = () => {
    const { client_id } = useParams();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    const [description, setDescription] = useState<string>('');
    const [partner, setPartner] = useState<string>('');

    // const getAdsAsync = useCallback(async () => {
    //     try {

    //     } catch (error: any) {
    //         console.log(error);
    //     }
    // }, [client_id]);

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
    }

    useEffect(() => {
        if (client_id) {
            // getAdsAsync();
            setIsUpdate(true)
        } else {
            setIsUpdate(false)
        }
    }, [client_id]);

    return (
        <Container>
            <HeaderForm>
                <h2>Propagandas</h2>
            </HeaderForm>
            <BodyForm>
                <CollumnForm>
                    <LineForm>
                        <Input label="Nome:" onChangeValue={(text: string) => { console.log('teste') }} type="text" value={''} />
                        <Select description="Selecione o cliente: " onChangeValue={(text) => { setPartner(text) }} options={options} value={partner} />
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
                </CollumnForm>
                <CollumnForm>
                    <LineForm >
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