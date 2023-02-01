import { useState } from 'react'
import carrito from "../../assets/svg/shopping-bag.svg"
import  "./CartWidget.css"

function CartWidget(){
const [ contador, funcionCambiarCount ] = useState(0)

const handleCount = () => {
funcionCambiarCount(contador + 1)

}
return(
<div className='CartWidget'> 
         <img className='carrito' src={carrito} alt="carrito" /><p className='CartCount bg-danger'>{contador}</p>
</div>
)
}

export default CartWidget