import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, NavLink } from 'react-router-dom'

import CartWidget from '../Cartwidget/CartWidget'
import logo from "../../assets/svg/athena.svg"
import  "./NavBar.css"



function NavBar(){
return(
<Navbar expand="lg" className='head' fixed="top">
    <Container>
        <Link to='/' className='home'>
            <img
              alt="logo"
              src={logo}
              width="200"
              height="50"
              className="d-inline-block align-top"
            />
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto navegacion">
            <NavLink className={({isActive})=> isActive ? 'color-on' : 'color-off'} to='/categoria/novelas'>Novelas</NavLink>
            <NavLink className={({isActive})=> isActive ? 'color-on' : 'color-off'} to='/categoria/enciclopedias'>Enciclopedias</NavLink>
            <NavLink className={({isActive})=> isActive ? 'color-on' : 'color-off'} to='/categoria/comics'>Comics</NavLink>
            <NavLink className={({isActive})=> isActive ? 'color-on' : 'color-off'} to='/categoria/revistas'>Revistas</NavLink>
          </Nav>  
      </Navbar.Collapse>
      <Link to='/detalle'>
            <CartWidget/>
          </Link>
    </Container>
  </Navbar>
)
}

export default NavBar

// <div> <figure> <img src={logo} alt="Athena libreria" /> </figure> <CartWidget /> </div>
 