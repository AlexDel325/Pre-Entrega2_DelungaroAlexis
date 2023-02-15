import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import { gProducts } from "../../utils/gProducts"
import CartCount from "../CartCount/CartCount"


function ItemListConteiner() {

    const[ productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
    const{ idCategoria } = useParams()

        useEffect(()=>{

        if(idCategoria){
            gProducts
            .then(res => setProductos(res.filter(producto=> producto.categoria === idCategoria)))
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
        <ul>
            { loading ? 
                    <li className="Carga">Cargando ...</li> 
                :
                    productos.map(producto => 
                    
                    <li className="card" key={producto.id}>
                        <h3 className="card-header"> {producto.name}</h3>
                        <div className="card-body">
                            <p><span>Categoria:</span> {producto.categoria}</p>
                            <p><span>Precio:</span> ${producto.price}</p>
                            <p><span>Unidades:</span> {producto.stock}</p>
                        </div>
                        <div className="card-footer"> 
                            <Link to={`/detalle/${producto.name}`}>
                                <button className="btn bg-primary">Detalle</button>
                            </Link>
                        </div>
                    </li>
                    )} 
        </ul>
    </>
    )
    }
    
    export default ItemListConteiner