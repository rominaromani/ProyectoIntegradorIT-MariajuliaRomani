import './ListadoCarrito.scss'
import { useContext } from 'react'
import ItemCarrito from './ItemCarrito'
import CarritoContext from '../context/CarritoContext'

const ListadoCarrito = () => {
  const { carrito, limpiarCarritoContext, guardarCarritoContext } = useContext(CarritoContext)

  const handleComprar = () => {
    guardarCarritoContext()
  }

  const handleLimpiarCarrito = () => {
    limpiarCarritoContext()
  }

  const calcularTotal = () => {
    return carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0).toFixed(2)
  }

  return (
    <>
    <section className='body-carrito'>
        <table className='tabla-carrito'>
            <thead>
            <tr>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {carrito.length <= 0 ? (
                <tr>
                <td colSpan={6} style={{textAlign: 'center'}}>No hay productos</td>
                </tr>
            ) : (
                carrito.map((producto, idx) => (
                <ItemCarrito key={idx} producto={producto} />
                ))
            )}
            </tbody>
        </table>

        {carrito.length > 0 && (
            <>
            <div className="carrito-total">
                <p>Total del Carrito: <span>${calcularTotal()}</span></p>
            </div>
                <div className="carrito-botones">
                    <button className="btn-limpiar" onClick={handleLimpiarCarrito}>Vaciar Carrito</button>
                    <button className="btn-comprar" onClick={handleComprar}>Comprar</button>
                </div>
            </>
        )}
    </section>
      
    </>
  )
}

export default ListadoCarrito
