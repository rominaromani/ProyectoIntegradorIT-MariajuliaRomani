import { useContext } from 'react';
import './TablaFila.scss';
import ProductosContext from '../context/ProductosContext';
import PropTypes from 'prop-types';

const TablaFila = ({ producto }) => {
  const { setProductoAEditar, eliminarProductoContext } = useContext(ProductosContext);

  const handleEditar = (producto) => {
    console.log('Producto a editar...', producto.id);
    setProductoAEditar(producto);
  };

  const handleEliminar = (producto) => {
    console.log('Producto a eliminar...', producto.id);
    eliminarProductoContext(producto.id);
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img className="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <div className="acciones">
          <button onClick={() => handleEditar(producto)}>
            <img src="/iconos/modificar.svg" alt="Editar" />
          </button>
          <button onClick={() => handleEliminar(producto)}>
            <img src="/iconos/eliminar.svg" alt="Eliminar" />
          </button>
        </div>
      </td>
    </tr>
  );
};

TablaFila.propTypes = {
  producto: PropTypes.shape({
    nombre: PropTypes.string,
    precio: PropTypes.number,
    stock: PropTypes.number,
    marca: PropTypes.string,
    categoria: PropTypes.string,
    detalles: PropTypes.string,
    foto: PropTypes.string,
    envio: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
};

export default TablaFila;
