import { useParams } from "react-router-dom"
import ItemCount from "../itemCount/ItemCount"

function ItemDetailConteiner() {

    const {nombreProducto} = useParams()

    return (
    <>
        <div>
            <h2>{nombreProducto}</h2>
            
            <ul>
                <li><span>Categoria:</span></li>
                <li><span>Unidades:</span></li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi similique quidem reiciendis! Praesentium, 
                aperiam nostrum, porro dignissimos corporis id voluptas obcaecati dolor dolore facilis a quaerat optio nisi 
                impedit magni, rerum similique. Tempore commodi asperiores magnam repellat quas sunt, necessitatibus nisi ratione 
                eveniet nesciunt labore in temporibus dolores? Possimus, aliquam?
            </p>
            <ItemCount initial={1} stock={10} onAdd={()=>{}}/>
        </div>
    </>
    )
    }
    
    export default ItemDetailConteiner