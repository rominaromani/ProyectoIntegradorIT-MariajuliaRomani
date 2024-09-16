import { useContext, useEffect, useState } from "react"
import ProductosContext from "../context/ProductosContext"
const Formulario = () => {

  const formInit = {
    id: null,
    nombre: '',
    precio: '',
    stock: '',
    marca: '',
    categoria: '',
    detalles: '',
    foto: '',
    envio: false,
  }

  const [form, setForm] = useState(formInit)
  const [Titulo, setTitulo] = useState('AGREGAR PRODUCTO')

  const { crearProductoContext, actualizarProductoContext, productoAEditar, setProductoAEditar } = useContext(ProductosContext)

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInit)
  }, [productoAEditar])
  

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('handleSubmit')

    try {

      if ( form.id === null ) {
        console.log('Creando un producto')
        setTitulo('AGREGAR PRODUCTO')
        await crearProductoContext(form)
      } else {
        console.log('Actualizando producto')
        setTitulo('EDITAR PRODUCTO')
        await actualizarProductoContext(form)
      }
      handleReset()
      
    } catch (error) {
      console.error('[handleSubmit]', error)
    }

  }

  const handleChange = e => {
    const { type, name, checked, value } = e.target

    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value
    })

  }

  const handleReset = () => {
    console.log('handleReset')
    setForm(formInit)
    setProductoAEditar(null)
  }

  return (
    <>
        <header className="product-form__header">
            <h3>{Titulo}</h3>
        </header>

        <form onSubmit={handleSubmit} className="product-form__form">
            <div className="product-form__group">
                <div className="product-form__field">
                    <label htmlFor="lbl-nombre" className="product-form__label">Introduce el nombre del producto:</label>
                    <input 
                        type="text" 
                        name="nombre" 
                        id="lbl-nombre" 
                        value={form.nombre} 
                        placeholder="Nombre"
                        onChange={handleChange}
                        className="product-form__input" />
                </div>
                <div className="product-form__field">
                    <label htmlFor="lbl-precio" className="product-form__label">Introduce el precio del producto</label>
                    <input 
                        type="text" 
                        name="precio" 
                        id="lbl-precio" 
                        value={form.precio} 
                        placeholder="Precio"
                        onChange={handleChange}
                        className="product-form__input" />
                </div>
            </div>

            <div className="product-form__group">
                <div className="product-form__field">
                    <label htmlFor="lbl-stock" className="product-form__label" aria-placeholder="nombre">Introduce el stock del producto</label>
                    <input 
                        type="text" 
                        name="stock" 
                        id="lbl-stock" 
                        value={form.stock} 
                        placeholder="Stock"
                        onChange={handleChange}
                        className="product-form__input" />
                </div>
                <div className="product-form__field">
                    <label htmlFor="lbl-marca" className="product-form__label" aria-placeholder="nombre">Introduce la marca del producto</label>
                    <input 
                        type="text" 
                        name="marca" 
                        id="lbl-marca" 
                        value={form.marca} 
                        placeholder="Marca"
                        onChange={handleChange}
                        className="product-form__input" />
                </div>
            </div>

            <div className="product-form__group">
                <div className="product-form__field">
                    <label htmlFor="lbl-categoria" className="product-form__label" aria-placeholder="nombre">Introduce la categoría del producto</label>
                    <input 
                        type="text" 
                        name="categoria" 
                        id="lbl-categoria" 
                        value={form.categoria} 
                        placeholder="Categoría"
                        onChange={handleChange}
                        className="product-form__input" />
                </div>
                <div className="product-form__field">
                    <label htmlFor="lbl-detalles" className="product-form__label" aria-placeholder="nombre">Introduce los detalles del producto</label>
                    <input 
                        type="text" 
                        name="detalles" 
                        id="lbl-detalles" 
                        value={form.detalles} 
                        placeholder="Detalles"
                        onChange={handleChange}
                        className="product-form__input" />
                </div>
            </div>

            <div className="product-form__field">
                <label htmlFor="lbl-foto" className="product-form__label" aria-placeholder="nombre">Introduce la foto del producto</label>
                <input 
                    type="text" 
                    name="foto" 
                    id="lbl-foto" 
                    value={form.foto} 
                    placeholder="Foto"
                    onChange={handleChange}
                    className="product-form__input" />
            </div>

            <div className="product-form__checkbox">
                <input 
                    type="checkbox" 
                    name="envio" 
                    id="lbl-envio" 
                    checked={form.envio} 
                    onChange={handleChange} />
                <label htmlFor="lbl-envio" className="product-form__label">¿Deseas que el producto tenga envío?</label>
            </div>

            <div className="product-form__buttons">
              <button type="submit" className="product-form__button">Guardar</button>
              <button type="reset" onClick={handleReset} className="product-form__button">Limpiar</button>
            </div>
        </form>
    </>
);

}

export default Formulario