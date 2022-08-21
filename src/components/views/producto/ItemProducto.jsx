import React from 'react';
import { Button } from 'react-bootstrap';
import './producto.css'

const ItemProducto = ({producto}) => {
    const {nombreProducto, id, categoria, imagen, precio} = {...producto}

    return (
            <tr>
                <td>{id}</td>
                <td>{nombreProducto}</td>
                <td>${precio}</td>
                <td className='truncate'>{imagen}</td>
                <td>{categoria}</td>
                <td>
                    <Button variant='warning'>Editar</Button>
                    <Button variant='danger'>Borrar</Button>
                </td>
            </tr>
    );
};

export default ItemProducto;