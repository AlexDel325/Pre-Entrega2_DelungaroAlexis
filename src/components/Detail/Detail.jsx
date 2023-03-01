import ItemCount from "../ItemCount/ItemCount"

export const Detail = ({ nombre, categoria, precio, foto, stock}) =>{

    return (
    <>             
        <div className="detalle">
                        <figure className="detalle-img"><img src={foto} alt="foto producto" /></figure>

                        <div className="detalle-texto">
                        <h2>{nombre}</h2>
                        <p><span>Categoria:</span> {categoria}</p>
                        <p><span>Unidades:</span> {stock}</p>
                        <p>{precio}</p>
                  
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi similique quidem reiciendis! Praesentium, 
                        aperiam nostrum, porro dignissimos corporis id voluptas obcaecati dolor dolore facilis a quaerat optio nisi 
                        impedit magni, rerum similique. Tempore commodi asperiores magnam repellat quas sunt, necessitatibus nisi ratione 
                        eveniet nesciunt labore in temporibus dolores? Possimus, aliquam?
                    </p>
                    

                    </div>
                    
                   <ItemCount initial={1} stock={stock} onAdd={()=>{}}/>
                
                 </div>
    
    </>
    )
    }