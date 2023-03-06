import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Stack from 'react-bootstrap/Stack';


const ItemCount = ({initial=1, stock=10, onAdd}) => {



    return (
        <div className='card mt5 w-100 todo-contador'>
            <div className='card-body row contador-body'>
    
                <div className='col'>
                    <center>
                        <label className='contador'>{1}</label>
                    </center>
                </div>
                <div className='col'>
                    <Stack>
                        <button className='btn btn-primary w-100 btn-top' onClick={()=>{}}> + </button>
                        <button className='btn btn-outline-primary w-100 btn-down' onClick={()=>{}}> - </button>
                    </Stack>
                </div>

                <button className='btn btn-primary count-cart-btn margen-btn' onClick={()=>{}}> Añadir al carrito </button>
                 
            </div>
            
        </div>
    )
}

export default ItemCount