import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { gProducts } from "../../utils/gProducts"
import "./ItemListConteiner.css"
import CartCount from "../CartCount/CartCount"


function ItemListConteiner() {

    const[ productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
    const{ idCategoria } = useParams()

        useEffect(()=>{

        if(idCategoria){
            gProducts
            .then(res => setProductos(res.filter(producto => producto.categoria === idCategoria)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } else{
            gProducts
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        } 
    },[idCategoria])

    return (
    <>
        <div className='contenedor'>
            { loading ? 
                    <h3 className="Carga">Cargando ...</h3> 
                :
                    productos.map(producto => 
                    
                    <div className="carta" key={producto.id}>
                        <h3 className="titulo"> {producto.name}</h3>
                        <div>
                            <figure className='foto'><img src={producto.img} alt="imagen" /></figure>
                            <p className='precio'> <span>Precio:</span>${producto.price}</p>
                        </div>
                        <div className="card-footer"> 
                            <Link to={`/detalle/${producto.name}`}>
                                <button className="boton">Detalle</button>
                            </Link>
                        </div>
                    </div>
                    )} 
        </div>
    </>
    )
    }
    
    export default ItemListConteiner