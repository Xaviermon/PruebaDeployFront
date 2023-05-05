import "./Navbar1.css";
import SearchBar from "../SearchBar/SearchBar";
import FiltroAttack from "../Filtros/FiltroAttack/FiltroAttack";
import FiltroName from "../Filtros/FiltroName/FiltroName";
import FilterTypes from "../Filtros/FiltroType/FilterType";
import FilterCreated from "../Filtros/FiltroCreated/FilterCreated";

const NavBar = ({setCurrentPag,setOrderRating,orderRating,setOrderName,}) => {
  return (
    <nav className="navbar">
      <div className="container-logo">
        <h1>PokeXavi</h1>
      </div>
      <div>
        <div className="filtros" >
          <SearchBar setCurrentPag={setCurrentPag} />
          <FiltroAttack
            setCurrentPag={setCurrentPag}
            setOrderRating={setOrderRating}
            orderRating={orderRating}
          />
          <FiltroName
            setCurrentPag={setCurrentPag}
            setOrderName={setOrderName}
          />
          <FilterTypes setCurrentPag={setCurrentPag}/>
          <FilterCreated setCurrentPag={setCurrentPag} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
