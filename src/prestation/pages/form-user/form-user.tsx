import React, { useCallback, useEffect, useState } from "react";
import { ButtonCommit, Container } from "./style";
import { useParams } from "react-router-dom";
import { PostPerson, PutPerson, getPerson } from "../../../api/services/person/person-services";
import { Input } from "../../components/input/input";
import { Card, CardBody, CardFooter, CardHeader, TitleCard, CardLine, CardColumn } from "../../utils/global-styles";
import Checkbox from "../../components/checkbox/checkbox";
import { PersonResponse } from "../../../core/entities/person/person";
import { toast } from "react-toastify";

const FormDriver: React.FC = () => {
    const { user_id } = useParams();
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(true);

    const getUserAsync = useCallback(async () => {

    }, [user_id]);

    const sendUser = async () => {
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
        if (user_id) {
            sendUser();
            setIsUpdate(true)
        } else {
            setIsUpdate(false)
        }
    }, [sendUser, user_id]);

    return (
        <Container>
            <Card>
                <CardHeader>

                </CardHeader>
                <CardBody>

                </CardBody>
                <CardFooter>
                    <CardColumn>
                        <Checkbox label="Ativo" checked={active} onChange={(check) => setActive(check)} />
                    </CardColumn>
                    <CardColumn />
                    <CardColumn style={{ justifyContent: 'flex-end', paddingRight: 5 }} >
                        <ButtonCommit onClick={sendUser}>
                            Enviar
                        </ButtonCommit>
                    </CardColumn>
                </CardFooter>
            </Card>
        </Container>
    )
}

export default FormDriver;