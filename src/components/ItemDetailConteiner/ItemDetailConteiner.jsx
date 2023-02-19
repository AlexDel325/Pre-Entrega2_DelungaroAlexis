import { useParams } from "react-router-dom"
import ItemCount from "../itemCount/ItemCount"
import { gProducts } from "../../utils/gProducts"
import { useEffect, useState } from "react"
import "./ItemDetailConteiner.css"

function ItemDetailConteiner() {

    const {nombreProducto} = useParams()

    const[ productos, setProductos] = useState([])
    const[loading, setLoading] = useState(true)
   

        useEffect(()=>{

            gProducts
            .then(res => setProductos(res.filter(producto => producto.name === nombreProducto)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    },[])

    return (
    <>
        <div>
            

            { loading ? 
                    <h3 className="Carga">Cargando ...</h3> 
                :
                    productos.map(producto => 
                        <div className="detalle">
                        <figure className="detalle-img"><img src={producto.img} alt="foto producto" /></figure>

                        <div className="detalle-texto">
                        <h2>{producto.name}</h2>
                        <p><span>Categoria:</span> {producto.categoria}</p>
                        <p><span>Unidades:</span> {producto.stock}</p>
                  
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi similique quidem reiciendis! Praesentium, 
                        aperiam nostrum, porro dignissimos corporis id voluptas obcaecati dolor dolore facilis a quaerat optio nisi 
                        impedit magni, rerum similique. Tempore commodi asperiores magnam repellat quas sunt, necessitatibus nisi ratione 
                        eveniet nesciunt labore in temporibus dolores? Possimus, aliquam?
                    </p>
                    

                    </div>
                    
                   <ItemCount initial={1} stock={producto.stock} onAdd={()=>{}}/>
                
                 </div>
    
                    )} 
        </div>
    </>
    )
    }
    
    export default ItemDetailConteiner