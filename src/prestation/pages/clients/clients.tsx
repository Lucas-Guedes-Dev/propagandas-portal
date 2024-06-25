import React from "react";
import Table from "../../components/table/table";
import { Container } from "./style";

const columns = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
    { key: 'address', header: 'Address' }
];

const lines = [
    { name: 'John Doe', age: 28, address: '123 Main St' },
    { name: 'Jane Smith', age: 34, address: '456 Elm St' },
    { name: 'John Doe', age: 28, address: '123 Main St' },
    { name: 'Jane Smith', age: 34, address: '456 Elm St' },
    { name: 'John Doe', age: 28, address: '123 Main St' },
    { name: 'Jane Smith', age: 34, address: '456 Elm St' },
    { name: 'John Doe', age: 28, address: '123 Main St' },
    { name: 'Jane Smith', age: 34, address: '456 Elm St' },
    { name: 'John Doe', age: 28, address: '123 Main St' },
    { name: 'Jane Smith', age: 34, address: '456 Elm St' },
    { name: 'John Doe', age: 28, address: '123 Main St' },
    { name: 'Jane Smith', age: 34, address: '456 Elm St' },
];

const Clients = () => {
    return (
        <Container>
            <Table columns={columns} lines={lines} />
        </Container>
    )
}

export default Clients;