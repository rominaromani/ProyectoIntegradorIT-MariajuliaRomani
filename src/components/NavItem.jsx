import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <li className="nav-bar__nav-item">
      <NavLink to={item.ruta} className="nav-bar__nav-link">
        {item.nombre}
      </NavLink>
    </li>
  );
};

// Validación de las props
NavItem.propTypes = {
  item: PropTypes.shape({
    ruta: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired
  }).isRequired
};

export default NavItem;
