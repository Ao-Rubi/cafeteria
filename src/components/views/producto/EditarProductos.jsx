import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EditarProductos = () => {
    return (
        <section className='container'>
            <h1 className='display-4 mt-5'>Nuevo producto</h1>
            <hr />

            <Form>
                <Form.Group className="mb-3" controlId="nombreProducto">
                    <Form.Label>Nombre de producto</Form.Label>
                    <Form.Control  type="text" placeholder="Ej: Tostadas" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="precioProducto">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="Ej: 400" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imagenProducto">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="text" placeholder="URL" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select>
                    <option value="">Seleccione una opcion</option>
                    <option value="bebida-caliente" >Bebidas Calientes</option>
                    <option value="bebida-fria">Bebidas Frias</option>
                    <option value="dulce">Dulce</option>
                    <option value="salado">Salado</option>
                    </Form.Select>
                </Form.Group>

                <Button className='ms-auto' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


            {/* {
                (msjError === true) ? ( <Alert variant="danger" className="mt-4">
                    Debe corregir los datos.
                </Alert>): null
            } */}


        </section>
    );
};

export default EditarProductos;