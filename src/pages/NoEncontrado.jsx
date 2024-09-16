import useTitulo from '../hooks/useTitulo'
import './NoEncontrado.scss'

const NoEncontrado = () => {
  useTitulo('404')
  return (
    <div>NoEncontrado</div>
  )
}

export default NoEncontrado