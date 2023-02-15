let products = [
    {id:'1', categoria: 'novelas',  name:'Producto 1',  description:'descripcion 1', stock: 10, price: 2000, img:''},
    {id:'2', categoria: 'manuales', name:'Producto 2',  description:'descripcion 2', stock: 10, price: 2000, img:''},
    {id:'3', categoria: 'comics',   name:'Producto 3',  description:'descripcion 3', stock: 10, price: 2000, img:''},
    {id:'4', categoria: 'revistas', name:'Producto 4',  description:'descripcion 4', stock: 10, price: 2000, img:''}
  ]
  
  export const gProducts = new Promise((res, rej)=>{
    let condition = true
    if (condition){
        setTimeout(()=> {
            res(products)
        }, 3000)
    } else {
        rej('todo mal')
    }
  })