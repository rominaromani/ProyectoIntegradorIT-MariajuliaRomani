import './Header.scss'
import Navbar from './Navbar';
import SearchBar from './SearchBar.jsx';

const Header = () => {
  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />

      <Navbar />

      <SearchBar />
      
    </header>
  );
};

export default Header;
