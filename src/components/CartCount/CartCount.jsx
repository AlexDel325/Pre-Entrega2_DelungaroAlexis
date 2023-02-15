import { useState } from 'react'

function CartCount() {
const [ contador, funcionCambiarCount ] = useState(0)

const handleCount = () => {
funcionCambiarCount(contador + 1)

}
return(
<> 
    {contador}
</>
)
}

export default CartCount