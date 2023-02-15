import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// ------ Componentes ------
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'

// ----- Aplicacion -----
function App() {
return (
<BrowserRouter>
  <header>
    <h1>Pre-Entrega 2</h1>
    <NavBar />
  </header>
  <main>
    <section>
      <Routes>
        <Route path='/' element={ <ItemListConteiner />} />
        <Route path='/categoria/:idCategoria' element={ <ItemListConteiner />} />
        <Route path='/detalle/:nombreProducto' element={ <ItemDetailConteiner />} />
        <Route path='*' element={ <Navigate to='/' />} />
      </Routes>
    </section>
  </main>
  
</BrowserRouter>
)
}

export default App