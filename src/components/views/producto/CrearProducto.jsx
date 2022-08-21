import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { cantidadCaracteres, validarPrecio, validarImagen } from './helpers';


const CrearProducto = () => {

    const [nombreProducto, setNombreProducto] = useState("");
    const [precio, setPrecio] = useState(0);
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar los datos
        if (cantidadCaracteres(nombreProducto) && validarPrecio(precio) && validarImagen(imagen)) {
            console.log("los datos son correctos crear el objero")
        }else{
            console.log("cargar bien los datos correctamente")
        }

        // crear un objeto

        // Enviar peticion a Json-Server (API) create
    }

    return (
        <section className='container'>
            <h1 className='display-4 mt-5'>Nuevo producto</h1>
            <hr />

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nombreProducto">
                    <Form.Label>Nombre de producto</Form.Label>
                    <Form.Control onChange={(e)=>{setNombreProducto(e.target.value)}} type="text" placeholder="Ej: Tostadas" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="precioProducto">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control onChange={(e)=>{setPrecio(e.target.value)}} type="number" placeholder="Ej: 400" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imagenProducto">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control onChange={(e)=>{setImagen(e.target.value)}} type="text" placeholder="URL" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select onChange={(e)=>{setCategoria(e.target.value)}}>
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
        </section>
    );
};

export default CrearProducto;