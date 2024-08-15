import React from "react";
import {
    Body,
    Column,
    ColumnHeader,
    Header,
    LineHeader,
    Line,
    TableContainer,
    TextHeader,
    ContainerNotFound,
    LabelNotFound,
    ButtonEditar,
} from "./style";
import NotFound from '../../assets/not-found.png';
import { useTheme } from "styled-components";
import { FaPenAlt, FaCheck } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { ImagePreview } from "../ImageUploader/style";

interface TableProps {
    columns: { key: string, header: string | React.ReactNode }[];
    lines: { [key: string]: any }[];
    onEdit?: (id: number) => void;
}

const Table: React.FC<TableProps> = ({ columns, lines, onEdit }) => {
    const theme = useTheme();

    const onEditClicked = (id: number) => {
        if (onEdit) {
            onEdit(id);
        }
    };

    const base64ToBlob = (base64: string, contentType: string = ''): string => {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: contentType });
        return URL.createObjectURL(blob);
    };

    return (
        <TableContainer>
            <Header>
                <LineHeader>
                    {columns.map((column) => (
                        <ColumnHeader key={column.key}>
                            {typeof column.header === 'string' ? (
                                <TextHeader>{column.header}</TextHeader>
                            ) : (
                                column.header
                            )}
                        </ColumnHeader>
                    ))}
                </LineHeader>
            </Header>
            <Body>
                {lines.length > 0 ? (
                    lines.map((line, rowIndex) => (
                        <Line key={rowIndex}>
                            {columns.map((column) => (
                                <Column key={column.key}>
                                    {typeof line[column.key] === 'boolean' ? (
                                        line[column.key] ? (
                                            <FaCheck size={30} color={theme.colors.secondSupportColor} />
                                        ) : (
                                            <IoMdCloseCircle size={30} color={theme.colors.errorColor} />
                                        )
                                    ) : column.key === 'id' || column.key === 'id_user' ? (
                                        <ButtonEditar onClick={() => onEditClicked(line[column.key])}>
                                            <FaPenAlt size={20} />
                                        </ButtonEditar>
                                    ) : column.key === 'image' ? (
                                        <ImagePreview
                                            style={{ width: '100px', height: '70px' }}
                                            src={base64ToBlob(line[column.key], 'image/png')}
                                            alt="Preview"
                                        />
                                    ) : (
                                        line[column.key]
                                    )}
                                </Column>
                            ))}
                        </Line>
                    ))
                ) : (
                    <ContainerNotFound>
                        <img alt="not found" src={NotFound} width={75} />
                        <LabelNotFound>Não foram encontrados registros</LabelNotFound>
                    </ContainerNotFound>
                )}
            </Body>
        </TableContainer>
    );
};

export default Table;
