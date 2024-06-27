import React from "react";
import { Body, Column, ColumnHeader, Header, LineHeader, Line, TableContainer, TextHeader, ContainerNotFound, LabelNotFound } from "./style";
import NotFound from '../../assets/not-found.png';
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa";
import { useTheme } from "styled-components";

interface TableProps {
    columns: { key: string, header: string | React.ReactNode }[],
    lines: { [key: string]: any }[]
}

const Table: React.FC<TableProps> = (props) => {
    const theme = useTheme();

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
                                        line[column.key] ? <FaToggleOn size={30} color={theme.colors.secondSupportColor} /> : <FaToggleOff size={30} color={theme.colors.errorColor} />
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
}

export default Table;
