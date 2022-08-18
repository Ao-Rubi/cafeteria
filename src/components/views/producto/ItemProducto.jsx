import React from 'react';
import { Button } from 'react-bootstrap';
const ItemProducto = () => {
    return (
            <tr>
                <td>1</td>
                <td>cafe</td>
                <td>400</td>
                <td>https://images.pexels.com/photos/4109850/pexels-photo-4109850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1</td>
                <td></td>
                <td>
                    <Button variant='warning'>Editar</Button>
                    <Button variant='danger'>Borrar</Button>
                </td>
            </tr>
    );
};

export default ItemProducto;