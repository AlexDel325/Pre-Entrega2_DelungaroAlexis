import { Link } from 'react-router-dom'

export const Item = ({nombre, precio, foto}) => {

    return (
    <>
        <Link to={`/detalle/${nombre}`}>
            <img src={foto} alt="imagen" />
            <span className="titulo"> {nombre}</span>
            <span className='precio'>${precio}</span>     
        </Link>
    </>
     
             
        

    )
    }