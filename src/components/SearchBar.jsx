import { Link } from "react-router-dom";

const SearchBar = () => {
    return (
      <div className="search-bar">
          <div className="search-bar__logo-container">FashionFusion</div>
          <form action="#" className="search-bar__form-container">
            <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
            <input type="search" className="search-bar__form-search" id="busqueda" placeholder="BUSCAR..."/>
            <button type="submit" className="search-bar__form-button">
              <img src="/iconos/buscar.svg" alt=""/>
            </button>
          </form>
          <div className="search-bar__carrito-container">
          <Link to="carrito">
            <img src="/iconos/carrito.svg" alt="carrito"/>
          </Link>
          </div>
          <div className="menu-toogle">
            <label htmlFor="menu" className="menu-toogle__label">
              <span className="menu-toogle__top-bread"></span>
              <span className="menu-toogle__meat"></span>
              <span className="menu-toogle__bottom-bread"></span>
            </label>
          </div>
        </div> 
    );
  };
  
  export default SearchBar;
  