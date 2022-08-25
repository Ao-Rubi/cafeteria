import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import { cantidadCaracteres, validarPrecio, validarImagen } from './helpers';
import Swal from 'sweetalert2';

const EditarProductos = () => {

    // Traer el parametro
    const {id} = useParams();

    const [producto, setProducto] = useState({});
    const URL = process.env.REACT_APP_API_SERVER;
    // Referencias
    const nombreProductoRef = useRef("");
    const precioRef = useRef(0);
    const imagenRef = useRef("");
    // Navigate
    const navegacion = useNavigate();


    useEffect(()=>{
        consultarAPI();
    },[])

    const consultarAPI = async ()=> {
        try {
            const respuesta = await fetch(URL + "/" + id);
            const dato = await respuesta.json();
            setProducto(dato);
        } catch (error) {
            console.log(error)
            //Mostrar mensaje al usuario
        }
    }

    const handleSubmit = async (e)=> {
        e.preventDefault()
        // Validar que los campos son correctos

        if (cantidadCaracteres(nombreProductoRef.current.value) && validarPrecio(precioRef.current.value)) {
            //  Crear un objeto con los datos modificados   
            const productoEditar = {
                nombreProducto: nombreProductoRef.current.value,
                imagen: imagenRef.current.value,
                precio: precioRef.current.value,
                categoria: producto.categoria
            }

            // Pedir a la API la actualizacion
            try {
                const resp = await fetch(`${URL}/${id}`, {
                    method: "PUT",
                    headers: {
                            "Content-Type":"application/json"
                    },
                    body: JSON.stringify(productoEditar)
                });
                if (resp.status === 200) {
                    Swal.fire(
                        'Producto Modificado!',
                        'El producto fue modificado correctamente',
                        'success'
                    );
                    // Redirecciono a la tabla de productos
                    navegacion("/administrar");
                }


            } catch (error) {
                console.log(error)
                //mostrar mensaje al usuario
            }

        }else{
            // Mostrar mensaje de error de validacion al usuario
        }

    }

    return (
        <section className='container'>
            <h1 className='display-4 mt-5'>Nuevo producto</h1>
            <hr />

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nombreProducto">
                    <Form.Label>Nombre de producto</Form.Label>
                    <Form.Control  type="text" placeholder="Ej: Tostadas" defaultValue={producto.nombreProducto} ref={nombreProductoRef}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="precioProducto">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="Ej: 400" defaultValue={producto.precio} ref={precioRef}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="imagenProducto">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="text" placeholder="URL" defaultValue={producto.imagen} ref={imagenRef}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select value={producto.categoria} onChange={e=>setProducto({...producto, categoria: e.target.value})}>
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