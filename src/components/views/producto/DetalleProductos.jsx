import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useParams } from 'react-router-dom';

const DetalleProductos = () => {

    //Traigo el parametro de la url
    const {id} = useParams();

    const [producto, setProducto] = useState({});
    const URL = process.env.REACT_APP_API_SERVER;

    const {imagen, nombreProducto, precio, categoria} = {...producto}

    useEffect(()=>{
        consultarAPI();
    },[])

    const consultarAPI = async ()=> {
        try {
            const respuesta = await fetch(URL + "/" + id);
            const dato = await respuesta.json();
            console.log(dato)
            setProducto(dato);
        } catch (error) {
            console.log(error)
            //Mostrar mensaje al usuario
        }
    }

    return (
        <div className='my-3'>
            <Container>
                <Row>
                    <Col xs={6} md={6} xl={6}><img className='img-fluid' src={imagen} alt={nombreProducto} /></Col>

                    <Col xs={6} md={6} xl={6}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{nombreProducto}</Card.Title>
                                <hr/>
                                <Card.Subtitle className="my-2"><Badge bg="success">{categoria}</Badge></Card.Subtitle>
                                <Card.Text>
                                <b className='me-2'>Descripcion:</b>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi delectus nisi dignissimos qui dolorem, in amet beatae. Facere, debitis. Veniam non reiciendis voluptatibus omnis esse facilis eligendi explicabo? Consectetur, minus?
                                </Card.Text>
                                <p><b className='me-1'>Precio:</b> ${precio}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetalleProductos;