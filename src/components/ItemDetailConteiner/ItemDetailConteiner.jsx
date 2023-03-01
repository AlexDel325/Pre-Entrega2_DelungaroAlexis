import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
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
    <>
        { productos.map(producto => 
                <Detail 
                    nombre = {producto.name}
                    categoria = {producto.categoria}
                    descricion = {producto.description}
                    stock = {producto.stock}
                    precio = {producto.price}
                    foto = {producto.img}
                />
            )} 
    </>
    )
    }
