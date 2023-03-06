import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Container from "react-bootstrap/esm/Container"

import { gProducts } from "../../utils/gProducts"
import { Detail } from "../Detail/detail"




export const ItemDetailConteiner = () => {

    const {nombreProducto} = useParams()

    const[ productos, setProductos] = useState([])

        useEffect(()=>{

            gProducts
            .then(res => setProductos(res.filter(producto => producto.name === nombreProducto)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    },[])

    return (
    <Container fluid>
        { productos.map(producto => 
                <Detail 
                    nombre = {producto.name}
                    categoria = {producto.categoria}
                    descripcion = {producto.description}
                    stock = {producto.stock}
                    precio = {producto.price}
                    foto = {producto.img}
                />
            )} 
    </Container>
    )
    }

