import React from 'react';
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardProducto = ({producto}) => {
    const {imagen, nombreProducto, precio, _id} = {...producto}

    return (
        <Col xs={12} md={4} lg={3} className="mb-3">
            <Card>
                <Card.Img variant="top" src={imagen} />

                <Card.Body>

                    <Card.Title>{nombreProducto}</Card.Title>

                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veritatis facere explicabo, eaque error delectus?
                    </Card.Text>

                    <div className='d-flex align-items-center'>
                        <h6 className='display-6 pe-3'>${precio}</h6>
                        <Link to={`/detalles/${_id}`} className="btn btn-danger">Ver Mas</Link>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardProducto;