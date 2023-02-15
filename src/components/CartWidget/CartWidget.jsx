import carrito from "../../assets/svg/shopping-bag.svg"
import  "./CartWidget.css"

import CartCount from '../CartCount/CartCount'

function CartWidget(){

return(
<div className='CartWidget'> 
         <img className='carrito' src={carrito} alt="carrito" />
         <p className='CartCount'><CartCount/></p>
</div>
)
}

export default CartWidget