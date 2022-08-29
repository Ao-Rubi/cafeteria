import React, { useEffect, useState } from 'react';
import CardProducto from './producto/CardProducto';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const URL = process.env.REACT_APP_API_SERVER;
    
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        consultarAPI();
    }, []);
    
    const consultarAPI = async()=>{
        //Peticion get
        try {
            const resultado = await fetch(URL);
            const listaProductos = await resultado.json();
            
            setProductos(listaProductos);
        } catch (error) {
            console.log(error)
            //Mensaje de error para el usuario
        }
    }


    return (
        <div className='mt-2'>
            <Container>
                <Row>
                {
                    productos.map((producto)=>{return <CardProducto key={producto.id} producto={producto}></CardProducto>})
                }
                </Row>
            </Container>
        </div>
    );
};

export default Home;