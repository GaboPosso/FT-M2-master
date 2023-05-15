import SearchBar from "./SearchBar";
import style from "./NavBar.module.css";

const Navbar = () => {
  return (
    <div className={style.nav}>
      <SearchBar/>
    </div>
  ) 
};

export default Navbar;