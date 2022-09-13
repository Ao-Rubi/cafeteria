import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import ItemProducto from './ItemProducto';
import {Link} from "react-router-dom"

const AdministrarProductos = () => {

    const URL = process.env.REACT_APP_API_SERVER;
    const [productos, setProductos] = useState([])

    useEffect(() => {
        consultarAPI();
    }, [])

    const consultarAPI = async () => {

        try {
            // Codigo que quiero ejecutar
            // Peticion get
            const respuesta = await fetch(URL);
            const listaProductos = await respuesta.json(); 
            setProductos(listaProductos);

        } catch (error) {
            console.log(error)
            // Mensage intuitivo para el usuario
        }

    }
    

    return (
        <section className='container'>
            <div className='d-flex justify-content-between align-items-center mt-5'>
                <h1 className='display-4'>Productos disponibles</h1>
                <Link to="/administrar/crear" className="btn btn-primary">Agregar</Link>
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
                    {
                        productos.map((producto) => <ItemProducto key={producto._id} producto={producto} consultarAPI={consultarAPI}></ItemProducto>)
                    }
                </tbody>

            </Table>
        </section>
    );
};

export default AdministrarProductos;