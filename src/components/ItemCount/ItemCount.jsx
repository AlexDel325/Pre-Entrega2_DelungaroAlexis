import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemCount = ({initial=1, stock=10, onAdd}) => {



    return (
        <div className='card mt5 w-50'>
            <div className='card-body row'>
            <div className='col'>
                    <button className='btn btn-outline-dark w-100' onClick={()=>{}}> Añadir al carrito </button>
                </div>
                <div className='col'>
                    <center>
                        <label>{1}</label>
                    </center>
                </div>
                <div className='col'>
                    <button className='btn btn-outline-dark w-50' onClick={()=>{}}> + </button>
                    <button className='btn btn-outline-dark w-50' onClick={()=>{}}> - </button>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default ItemCount