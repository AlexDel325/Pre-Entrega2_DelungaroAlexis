import ItemCount from "../ItemCount/ItemCount"

import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import './Detail.css'

export const Detail = ({ nombre, categoria, precio, foto, stock, descripcion}) =>{

    return (
    <>             
        <Row className="detalle">
            
            <Col>
            <figure className="detalle-img"><img src={foto} alt="foto producto" /></figure>
            </Col>

            <Col>
                <div className="detalle-info">
                    <h2 className="detalle-titulo">{nombre}</h2>
                    <p  className="detalle-descrip"> {descripcion} </p>
                    <p  className="detalle-cat"> <span>Categoria:</span> {categoria}</p>
                    <p  className="detalle-stock"> <span>Unidades:</span> {stock}</p>  
                    <p  className="detalle-precio"> ${precio}</p>
                </div>

                <ItemCount initial={1} stock={stock} onAdd={()=>{}}/>
                
            </Col>
                
         </Row>
    
    </>
    )
    }