import "./Home.css";
import exit from '../../../img/exitPokemon.png'
import NavBar from '../Nav/NavBar'
import PokeCards from "../../PokeCards/PokeCards";
import Paginado from "../../Paginado/Paginado";
import Modal from "../../Modal/Modal";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllPokemons } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const pokemons = useSelector((state) => state.pokemons);
  
  const [orderRating, setOrderRating] = useState("");
  const [orderName, setOrderName] = useState("");
  const [currentPag, setCurrentPag] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPag * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon,indexOfLastPokemon);

  useEffect(() => {
    if (allPokemons.length === 0) {
      dispatch(getAllPokemons());
    }
  }, [dispatch, allPokemons]);

  const paginado = (pageNumber) => {
    setCurrentPag(pageNumber);
  };

  return (
    <div className="container-home">
      <div>
        <NavBar
          setOrderRating={setOrderRating}
          setCurrentPag={setCurrentPag}
          orderRating={orderRating}
          setOrderName={setOrderName}
          orderName={orderName}
        />
      </div>
      <div>
        <div>
          <div className="container-home-create">
            <div className="home">
              <Link to="/home">
                <h2>Home</h2>
              </Link>
            </div>
            <div className="create">
              <Link to="/create">
                <h2>Create Pokemon</h2>
              </Link>
            </div>
            <div>
              <Link to="/">
              <img className="exit-img" src={exit} alt="" />
              </Link>
            </div>
          </div>
          <Paginado
            pokemons={pokemons.length}
            pokemonsPerPage={pokemonsPerPage}
            paginado={paginado}
            currentPag={currentPag}
            setCurrentPag={setCurrentPag}
            setPokemonsPerPage={setPokemonsPerPage}
          />
        </div>
        <div>
          {
            currentPokemons.length !== 0 ? <PokeCards currentPokemons={currentPokemons} /> : <Modal dispatch={dispatch} getAllPokemons={getAllPokemons} />
          }          
        </div>
      </div>
    </div>
  );
};

export default Home;
