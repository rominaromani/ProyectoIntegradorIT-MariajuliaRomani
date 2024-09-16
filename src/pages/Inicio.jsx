import { useContext } from 'react'
import Card from '../components/Card'
import useTitulo from '../hooks/useTitulo'
import './Inicio.scss'
import ProductosContext from '../context/ProductosContext'

const Inicio = () => {
  const {productos} = useContext(ProductosContext)
  useTitulo('Inicio')
  let cantProductos = productos ? productos.length : 0
  return (
    <main>
      <section className="section-cards">
        <header className="section-cards__header">
          <h1>Inicio</h1>
          <p>Se encontraron {cantProductos} productos</p>
        </header>
        <div className="cards-container" id="contenedor-cards">

          {
            productos && productos.map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))
          }
          
          
        </div>
        

      </section> 
    </main>
  )
}

export default Inicio