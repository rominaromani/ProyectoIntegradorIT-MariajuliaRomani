import useTitulo from '../hooks/useTitulo'
import FormularioContacto from '../components/FormularioContacto'
import MapaUbicacion from '../components/MapaUbicacion'
import './Contacto.scss'

const Contacto = () => {
  useTitulo('Contacto')

  return (
    <>
      <FormularioContacto />
      <MapaUbicacion />
    </>
  )
}

export default Contacto
