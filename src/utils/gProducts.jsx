import iliada from "../assets/img/iliada.jpg"
import odisea from "../assets/img/odisea.jpg"
import Oz from "../assets/img/oz.jpg"
import atlas1 from "../assets/img/atlas.jpg"
import atlasa from "../assets/img/atlas_animales.jpg"
import hercules from "../assets/img/heracles.jpg"
import batman from "../assets/img/batman.jpg"
import rev from "../assets/img/rev1.png"


let products = [
    {id:'1', categoria: 'novelas',  name:'La ilíada',                  description:'descripcion 1', stock: 10, price: 2000, img: iliada},
    {id:'2', categoria: 'novelas',  name:'La Odisea',                  description:'descripcion 1', stock: 10, price: 2000, img: odisea},
    {id:'3', categoria: 'novelas',  name:'El mago de Oz',              description:'descripcion 1', stock: 10, price: 2000, img: Oz},
    {id:'4', categoria: 'enciclopedias', name:'Atlas del Mundo',            description:'descripcion 2', stock: 10, price: 2000, img: atlas1},
    {id:'5', categoria: 'enciclopedias', name:'Atlas de los Animales',      description:'descripcion 2', stock: 10, price: 2000, img: atlasa},
    {id:'6', categoria: 'comics',   name:'Hercules',                   description:'descripcion 3', stock: 10, price: 2000, img: hercules},
    {id:'7', categoria: 'comics',   name:'Batman',                     description:'descripcion 3', stock: 10, price: 2000, img: batman},
    {id:'8', categoria: 'revistas', name:'Revisa VOGUE',               description:'descripcion 4', stock: 10, price: 2000, img: rev}
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