import "../FormPage/FormPage.css";
//import iconos
import iconCharmander from "../../img/iconForm/charmander.png";
import iconAltura from "../../img/iconForm/altura.png";
import iconBascula from "../../img/iconForm/bascula.png";
import iconDumbbell from "../../img/iconForm/dumbbell.png";
import iconGallery from "../../img/iconForm/gallery.png";
import iconKatana from "../../img/iconForm/katana.png";
import iconRunning from "../../img/iconForm/running-shoes.png";
import iconShield from "../../img/iconForm/shield.png";

import { validate } from "../../validadoForm/validate";
import { useState, useEffect } from "react";
import {
  getAllPokemons,
  updatePokemon,
  cleanCharacterDetail,
  getPokemonDetail,
} from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const UpdateForm = () => {
  const pokeDetail = useSelector((state) => state.pokemonsDetails);
  const [creatNewPokemon, setCreateNewPokemon] = useState({
    name: pokeDetail.name,
    image: pokeDetail.image,
    life: pokeDetail.life,
    attack: pokeDetail.attack,
    defense: pokeDetail.defense,
    speed: pokeDetail.speed,
    height: pokeDetail.height,
    weight: pokeDetail.weight,
  });
  const [error, setError] = useState({
    name: "",
    image: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetail(id));

      return () => dispatch(cleanCharacterDetail());
  }, [dispatch, id]);

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setCreateNewPokemon({ ...creatNewPokemon, [property]: value });
    setError(validate({ ...creatNewPokemon, [property]: value }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (
      creatNewPokemon.name &&
      creatNewPokemon.image &&
      creatNewPokemon.life &&
      creatNewPokemon.attack 
    ){
      dispatch(updatePokemon(id, creatNewPokemon))
      dispatch(getAllPokemons())
      navigate('/home')
    }else{
      alert('Faltan datos')
    }
  };

  return (
    <div className="container-allForm">
      <div className="nombre-home">
        <Link to="/home">
          <h1>Home</h1>
        </Link>
      </div>
      <div className="container-form">
        <form className="form">
          <h3 className="name-form">Update Pokemon</h3>
          <div className="input-name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="input-form"
              value={creatNewPokemon.name}
              onChange={handleInputChange}
            />
            <span className="asterisco">*</span>
            <img className="icons" src={iconCharmander} alt="" />
            <p>{error.name}</p>
          </div>
          <div className="input-name2">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              className="input-form"
              value={creatNewPokemon.image}
              onChange={handleInputChange}
            />
            <span className="asterisco">*</span>
            <img className="icons" src={iconGallery} alt="" />
            <p>{error.image}</p>
          </div>
          <div className="input-name3">
            <label htmlFor="life">Life</label>
            <input
              type="text"
              name="life"
              className="input-form"
              value={creatNewPokemon.life}
              onChange={handleInputChange}
            />
            <span className="asterisco">*</span>
            <img className="icons" src={iconDumbbell} alt="" />
            <p>{error.life}</p>
          </div>
          <div className="input-name4">
            <label htmlFor="attack">Attack</label>
            <input
              type="text"
              name="attack"
              className="input-form"
              value={creatNewPokemon.attack}
              onChange={handleInputChange}
            />
            <span className="asterisco">*</span>
            <img className="icons" src={iconKatana} alt="" />
            <p>{error.attack}</p>
          </div>
          <div className="input-name5">
            <label htmlFor="defense">Defense</label>
            <input
              type="text"
              name="defense"
              className="input-form"
              value={creatNewPokemon.defense}
              onChange={handleInputChange}
            />
            <span className="asterisco">*</span>
            <img className="icons" src={iconShield} alt="" />
            <p>{error.defense}</p>
          </div>
          <div className="input-name6">
            <label htmlFor="speed">Speed</label>
            <input
              type="text"
              name="speed"
              className="input-form"
              value={creatNewPokemon.speed}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconRunning} alt="" />
            <p>{error.speed}</p>
          </div>
          <div className="input-name7">
            <label htmlFor="height">Height</label>
            <input
              type="text"
              name="height"
              className="input-form"
              value={creatNewPokemon.height}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconAltura} alt="" />
            <p>{error.height}</p>
          </div>
          <div className="input-name8">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              name="weight"
              className="input-form"
              value={creatNewPokemon.weight}
              onChange={handleInputChange}
            />
            <img className="icons" src={iconBascula} alt="" />
            <p>{error.weight}</p>
          </div>
          <button
            className="buttonfrom"
            onClick={(event) => handleOnSubmit(event)}
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
