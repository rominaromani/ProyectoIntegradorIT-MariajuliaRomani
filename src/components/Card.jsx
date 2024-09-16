import './Card.scss'
import { useContext } from 'react';
import PropTypes from 'prop-types';
import CarritoContext from '../context/CarritoContext';

const Card = ( { producto } ) => {

  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)

  const handleAgregar = (producto) => {
    // console.log(producto)
    console.log('Agregando producto al carrito...')
    agregarProductoAlCarritoContext(producto)
  }

  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img
            src={producto.foto}
            alt={producto.nombre}
            className="card__image"
          />
        </div>
        <div className="card__content">
          <h2 className="card__heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>
              S/.{producto.precio}
            </p>
            <button className='card__button' onClick={() => handleAgregar(producto)}>Comprar</button>
          </div>
        </div>
      </article>
    </div>
  );
};

Card.propTypes = {
  producto: PropTypes.object.isRequired,
};

export default Card;
