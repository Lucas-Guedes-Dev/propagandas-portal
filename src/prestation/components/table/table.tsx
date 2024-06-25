import React from "react";
import { Body, Column, ColumnHeader, Header, LineHeader, Line, TableContainer, TextHeader } from "./style";

interface TableProps {
    columns: { key: string, header: string | React.ReactNode }[],
    lines: { [key: string]: any }[]
}

const Table: React.FC<TableProps> = (props) => {
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
                {props.lines.map((line, rowIndex) => (
                    <Line key={rowIndex}>
                        {props.columns.map((column) => (
                            <Column key={column.key}>
                                {line[column.key]}
                            </Column>
                        ))}
                    </Line>
                ))}
            </Body>
        </TableContainer>
    )
}

export default Table;
