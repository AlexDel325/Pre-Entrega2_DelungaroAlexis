import iliada from "../assets/img/iliada.jpg"
import odisea from "../assets/img/odisea.jpg"
import Oz from "../assets/img/oz.jpg"
import atlas1 from "../assets/img/atlas.jpg"
import atlasa from "../assets/img/atlas_animales.jpg"
import hercules from "../assets/img/heracles.jpg"
import batman from "../assets/img/batman.jpg"
import rev from "../assets/img/rev1.png"

let   desIliada = "La Ilíada es un poema épico en veinticuatro cantos, que tiene como argumento un episodio del último año de la guerra de Troya: la cólera de Aquiles, el más célebre y valiente soldado griego, contra Agamenón, su comandante, quien le ha robado su esclava Briseida.",
      desOdisea = 'La historia narra el viaje de regreso del héroe Odiseo a su patria, la isla de Ítaca, tras su participación en la guerra de Troya. Su travesía estará llena de peligros y aventuras. "La Odisea" es una metáfora del viaje que es la vida para todos nosotros; de ahí que sea un clásico universa',
      desMdOz = 'Dorothy, que sueña con viajar más allá del arco iris, ve su deseo hecho realidad cuando un tornado se la lleva con su perrito al mundo de Oz. Entonces se dirige por el Camino Amarillo hacia la Ciudad Esmeralda, donde vive el todopoderoso Mago de Oz, que puede ayudarla a regresar a Kansas. Durante el viaje, se hace amiga del Espantapájaros que desea un cerebro, el Hombre de Hojalata que quiere un corazón y el León Cobarde le hace falta el coraje, por lo que deciden unirse a Dorothy en su odisea.',
      desAtlas = 'Es una colección de mapas publicados de manera conjunta en un libro. Dependiendo del área geográfica y de los temas tratar, los atlas se pueden clasificar en Generales o Temáticos. En ambos casos, los atlas contribuyen al conocimiento geográfico de un determinado territorio',
      desAtlas2 = 'En total, aparecen casi 200 de los animales más particulares del mundo, todos dentro del hábitat al que pertenecen. El libro muestra desde una liebre común a un tapir malayo o un elefante marino, representados en bellas ilustraciones y con interesantes textos.',
      desHercules ='Nacido de una mujer mortal, Hércules es el hijo de Zeus, y pasó siglos viajando por el mundo, derrotando monstruos y ayudando a los demás héroes de Grecia, como Teseo y Jasón. Y en los tiempos modernos, el papel de Hércules no es muy diferente, ya que ayuda a los héroes de hoy a luchar contra los villanos como uno de los miembros más emblemáticos de Los Vengadores.',
      desBatman = 'El peor enemigo de Batman, el Joker, se ha escapado de la prisión de Arkham una vez más. El criminal toma al inspector Gordon y a su hija, a quien deja en una silla de ruedas. Con este acto, el Joker quiere hacer que el inspector Gordon se vuelva loco. Para salvar al inspector, Batman deberá encontrar el escondite del Joker antes de que sea demasiado tarde.',
      desRevista = 'Vogue es una revista estadounidense de moda que se fundó en 1892. Su fundador fue Arthur Baldwin Turnure. Cuando falleció en 1909, la revista pasó a manos de la editorial Conde Nast Publications Inc. (creada en 1908, con sede principal en Nueva York).';

let products = [
    {id:'1', categoria: 'novelas',  name:'La ilíada',                  description: desIliada, stock: 10, price: 1999.99, img: iliada},
    {id:'2', categoria: 'novelas',  name:'La Odisea',                  description: desOdisea, stock: 10, price: 1999.99, img: odisea},
    {id:'3', categoria: 'novelas',  name:'El mago de Oz',              description: desMdOz, stock: 10, price: 1999.99, img: Oz},
    {id:'4', categoria: 'enciclopedias', name:'Atlas del Mundo',       description: desAtlas, stock: 10, price: 1999.99, img: atlas1},
    {id:'5', categoria: 'enciclopedias', name:'Atlas de los Animales', description: desAtlas2, stock: 10, price: 1999.99, img: atlasa},
    {id:'6', categoria: 'comics',   name:'Hercules',                   description: desHercules, stock: 10, price: 1999.99, img: hercules},
    {id:'7', categoria: 'comics',   name:'Batman',                     description: desBatman, stock: 10, price: 1999.99, img: batman},
    {id:'8', categoria: 'revistas', name:'Revisa VOGUE',               description: desRevista, stock: 10, price: 1999.99, img: rev}
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


  