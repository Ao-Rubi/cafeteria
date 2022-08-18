import React from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import ItemProducto from './ItemProducto';

const AdministrarProductos = () => {
    return (
        <section className='container'>
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <h1 className='display-4'>Productos disponibles</h1>
                <Button>Agregar</Button>
            </div>

            <hr />
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>cod</th>
                        <th>producto</th>
                        <th>precio</th>
                        <th>imagen URL</th>
                        <th>Categoria</th>
                        <th>Opciones</th>
                    </tr>
                </thead>

                <tbody>
                    <ItemProducto></ItemProducto>
                </tbody>

            </Table>
        </section>
    );
};

export default AdministrarProductos;