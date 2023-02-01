import CartWidget from '../Cartwidget/CartWidget'
import logo from "../../assets/svg/athena.svg"
import  "./NavBar.css"


function NavBar(){
return(
<div className='NavBar'>
  <div className='head'>
  <figure>
  <img src={logo} alt="Athena libreria" />
  </figure>
  <CartWidget />
  </div>
  <nav>
    <ul>
      <li><a href="#">Libros</a></li>
      <li><a href="#">Enciclopedias</a></li>
      <li><a href="#">Comics</a></li>
      <li><a href="#">ofertas</a></li>
      <li><a href="#">contacto</a></li>
    </ul>
  </nav>
</div>
)
}

export default NavBar