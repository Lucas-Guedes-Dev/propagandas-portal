import React from "react";
import { Body, Column, ColumnHeader, Header, LineHeader, Line, TableContainer, TextHeader, ContainerNotFound, LabelNotFound, ButtonEditar } from "./style";
import NotFound from '../../assets/not-found.png';
import { useTheme } from "styled-components";
import { FaPenAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

interface TableProps {
    columns: { key: string, header: string | React.ReactNode }[],
    lines: { [key: string]: any }[],
    onEdit?: (id: number) => void;
}

const Table: React.FC<TableProps> = (props) => {
    const theme = useTheme();

    const onEditClicked = (id: number) => {
        if (props.onEdit) {
            props.onEdit(id)
        }
    }

    return (
        <TableContainer>
            <Header>
                <LineHeader>
                    {props.columns.map((column) => (
                        <ColumnHeader key={column.key}>
                            {typeof column.header === 'string' ? (
                                <TextHeader>
                                    {column.header}
                                </TextHeader>
                            ) : (
                                column.header
                            )}
                        </ColumnHeader>
                    ))}
                </LineHeader>
            </Header>
            <Body>
                {props.lines.length > 0 ? (
                    props.lines.map((line, rowIndex) => (
                        <Line key={rowIndex}>
                            {props.columns.map((column) => (
                                <Column key={column.key}>
                                    {typeof line[column.key] === 'boolean' ? (
                                        line[column.key] ? <FaCheck size={30} color={theme.colors.secondSupportColor} /> : <IoMdCloseCircle size={30} color={theme.colors.errorColor} />
                                    ) : (
                                        column.key === 'id' || column.key === 'id_user' ? (
                                            <ButtonEditar onClick={() => onEditClicked(line[column.key])}>
                                                <FaPenAlt size={20} />
                                            </ButtonEditar>
                                        ) : (
                                            line[column.key]
                                        )
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
}

export default Table;
