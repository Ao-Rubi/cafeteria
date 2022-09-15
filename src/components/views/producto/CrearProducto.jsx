import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { cantidadCaracteres, validarPrecio, validarImagen } from './helpers';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CrearProducto = () => {

    const [nombreProducto, setNombreProducto] = useState("");
    const [precio, setPrecio] = useState(0);
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("");
    const [msjError, setMsjError] = useState(false);

    // Variable de entorno
    const URL = process.env.REACT_APP_API_SERVER

    // Inicializar useNavigate
    const navegacion = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar los datos
        if (cantidadCaracteres(nombreProducto) && validarPrecio(precio)) {
            console.log("los datos son correctos crear el objeto")
            
            // crear un objeto
            const nuevoProducto = {
                nombreProducto,
                precio,
                imagen: imagen,
                categoria: categoria
            }

            try{
                //Envio la peticion del objeto al API
                const respuesta = await fetch(URL, {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(nuevoProducto)
                })

                if (respuesta.status === 201) {
                    // Mensaje que todo salio bien

                    Swal.fire(
                        'Producto creado!',
                        'El producto fue agregado correctamente',
                        'success'
                    )

                    // Redirecciono a la pagina de administrar
                    navegacion("/administrar")
                }

                console.log(respuesta)
            }catch(error){
                console.log(error)
                //Mostrar un mensaje al usuario
            }

            // Enviar peticion a Json-Server (API) create

            setMsjError(false);
        }else{
            console.log("Datos Erroneos")
            setMsjError(true);
        }

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

            {
                (msjError === true) ? ( <Alert variant="danger" className="mt-4">
                    Debe corregir los datos.
                </Alert>): null
            }


        </section>
    );
};

export default CrearProducto;