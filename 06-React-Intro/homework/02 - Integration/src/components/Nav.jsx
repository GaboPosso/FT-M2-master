import SearchBar from "./SearchBar";
import { Link, NavLink } from "react-router-dom";
const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Link to="/">
        <button>LOGOUT</button>      
      </Link>
      
      <Link to="/about">
        <button>About</button>
      </Link>
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default Nav;
