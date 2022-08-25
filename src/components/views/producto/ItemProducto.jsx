import React from 'react';
import { Button } from 'react-bootstrap';
import './producto.css'
import Swal from 'sweetalert2';

const ItemProducto = ({producto, consultarAPI}) => {
    const {nombreProducto, id, categoria, imagen, precio} = {...producto}
    const URL = process.env.REACT_APP_API_SERVER;

    const handleDelete = ()=> {
        Swal.fire({
            title: 'Seguro de borrar?',
            text: "No hay vuelta atras",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Borrar!',
            cancelButtonText: "Cancelar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Realizar la peticion para eliminar producto. DELETE

                try {
                    const parametro = {
                        method: "DELETE"
                    }
                    const respuesta = await fetch(URL + "/" + id, parametro);
                    console.log(respuesta)

                    if (respuesta.status === 200) {
                        
                        Swal.fire(
                            'Producto eliminado!',
                            'Producto borrado correctamente.',
                            'success'
                        )
                        // Recargar la tabla de productos
                        consultarAPI();
                    }

                } catch (error) {
                    console.log(error)
                    //Mostrar mensaje de error al usuario
                }
            }
        })
    }

    return (
            <tr>
                <td>{id}</td>
                <td>{nombreProducto}</td>
                <td>${precio}</td>
                <td className='truncate'>{imagen}</td>
                <td>{categoria}</td>
                <td>
                    <Button variant='warning'>Editar</Button>
                    <Button variant='danger' onClick={handleDelete}>Borrar</Button>
                </td>
            </tr>
    );
};

export default ItemProducto;