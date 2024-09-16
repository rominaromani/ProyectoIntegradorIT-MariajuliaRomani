import { NavLink } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-container">FashionFusion</div>
      <div className="footer__content">
      <div className="footer__nav-container">
        <ul className="footer__nav-list">
          <NavLink to='/' className="footer__nav-link">Inicio</NavLink>
          <NavLink to='/alta' className="footer__nav-link">Alta</NavLink>
          <NavLink to='/nosotros' className="footer__nav-link">Nosotros</NavLink>
          <NavLink to='/contacto' className="footer__nav-link">Contacto</NavLink>
        </ul>
      </div>

      <div className="footer__nav-container">
        <ul className="footer__nav-list">
          {/* <NavLink to='/ayuda' className="footer__nav-link">Centro de ayuda</NavLink>
          <NavLink to='/envios' className="footer__nav-link">Envíos/Devoluciones</NavLink>
          <NavLink to='/politicas' className="footer__nav-link">Políticas de la tienda</NavLink>
          <NavLink to='/pagos' className="footer__nav-link">Métodos de pago</NavLink> */}
          <NavLink to='#' className="footer__nav-link">Centro de ayuda</NavLink>
          <NavLink to='#' className="footer__nav-link">Envíos/Devoluciones</NavLink>
          <NavLink to='#' className="footer__nav-link">Políticas de la tienda</NavLink>
          <NavLink to='#' className="footer__nav-link">Métodos de pago</NavLink>

        </ul>
      </div>
      <div className="footer__contact-container">
        <p>info@fashionfusion.com</p>
        <p>Av. Almirante Miguel Grau, 15074 Lima, Perú</p>
        <p>Tel: 987-123-456</p>
      </div>
      <div className="footer__social-container">
        <NavLink to='#' className="footer__social-link">
          <img src="/iconos/facebook.svg" alt="facebook"/>
        </NavLink>
        <NavLink to='#' className="footer__social-link">
          <img src="/iconos/instagram.svg" alt="instagram"/>
        </NavLink>
        <NavLink to='#' className="footer__social-link">
          <img src="/iconos/twitter.svg" alt="twitter"/>
        </NavLink>

      </div>
      <div className="footer__subscription">
        <form action="#" className="footer__subscription-form">
          <label htmlFor="email" className="footer__subscription-label">Suscríbete. Mantén tu estilo</label>
          <input type="email" className="footer__subscription-input" id="email" name="email" placeholder="Ingresa tu email aquí" autoComplete='email'/>
          <button type="submit" className="footer__subscription-button">Unirse</button>
        </form>
      </div>
    </div>
    </footer>
  )
}

export default Footer