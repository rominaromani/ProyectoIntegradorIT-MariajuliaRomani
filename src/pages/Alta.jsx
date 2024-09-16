import useTitulo from '../hooks/useTitulo'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import './Alta.scss'

const Alta = () => {

  useTitulo('Alta')
  
  return (
    <> 
      <section className="product-crud">
        <header className="product-crud__header">
            <h1>alta</h1>
        </header>

      </section>

      <section className="product-form">
        <Formulario />
      </section>

      <Tabla />
    </>
  )
}

export default Alta