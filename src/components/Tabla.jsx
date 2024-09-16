import './Tabla.scss'
import { useContext } from "react"
import TablaFila from "./TablaFila"
import ProductosContext from "../context/ProductosContext"

const Tabla = () => {

  const { productos } = useContext(ProductosContext)

  return (
    <>
    <header className="product-form__header">
            <h3>LISTADO DE PRODUCTOS</h3>
    </header>
    <table className="tabla-alta">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Marca</th>
          <th>Categoría</th>
          <th>Detalles</th>
          <th>Foto</th>
          <th>Envío</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>

        {
          productos && productos.map( producto => (
            <TablaFila key={producto.id} producto={producto} />
          ))

        }

      </tbody>

    </table>
    </>
  )
}

export default Tabla