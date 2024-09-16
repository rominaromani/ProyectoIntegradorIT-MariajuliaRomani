import useTitulo from "../hooks/useTitulo"
import ListadoCarrito from "../components/ListadoCarrito"

const Carrito = () => {

  useTitulo('Carrito')

  return (
    <>
      <section className="product-crud">
        <header className="product-crud__header">
            <h1>Tus Productos</h1>
        </header>

      </section>
      <ListadoCarrito />
    </>
  )
}

export default Carrito