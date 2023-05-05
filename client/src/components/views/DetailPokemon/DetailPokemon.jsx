//!import css
import "./DetailPokemon.css";
//!icons details
import iconAltura from "../../../img/iconForm/altura.png";
import iconBascula from "../../../img/iconForm/bascula.png";
import iconDumbbell from "../../../img/iconForm/dumbbell.png";
import iconKatana from "../../../img/iconForm/katana.png";
import iconRunning from "../../../img/iconForm/running-shoes.png";
import iconShield from "../../../img/iconForm/shield.png";
//!icons types
import bug from '../../../img/iconDetail/Bug.ico'
import dark from '../../../img/iconDetail/Dark.ico'
import dragon from '../../../img/iconDetail/Dragon.ico'
import electric from '../../../img/iconDetail/Electric.ico'
import fairy from '../../../img/iconDetail/Fairy.ico'
import fighting from '../../../img/iconDetail/Fighting.ico'
import fire from '../../../img/iconDetail/Fire.ico'
import flying from '../../../img/iconDetail/Flying.ico'
import ghost from '../../../img/iconDetail/Ghost.ico'
import grass from '../../../img/iconDetail/Grass.ico'
import ground from '../../../img/iconDetail/Ground.ico'
import ice from '../../../img/iconDetail/Ice.ico'
import normal from '../../../img/iconDetail/Normal.ico'
import poison from '../../../img/iconDetail/Poison.ico'
import psychic from '../../../img/iconDetail/Psychic.ico'
import rock from '../../../img/iconDetail/Rock.ico'
import steel from '../../../img/iconDetail/Steel.ico'
import water from '../../../img/iconDetail/Water.ico'
import exit from '../../../img/exitPokemon.png'

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  getPokemonDetail,
  cleanCharacterDetail,
  deletePokemon,
  getAllPokemons
} from "../../../redux/actions/actions";

const DetailPokemon = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const pokemonsDetails = useSelector((state) => state.pokemonsDetails);
  let name = { bug, dark, dragon, electric, fairy, fighting, fire, flying,ghost,grass, ground, ice, normal, poison, psychic, rock, steel, water  }

  useEffect(() => {
    dispatch(getPokemonDetail(id));

    return () => dispatch(cleanCharacterDetail());
  }, [dispatch, id]);

  const hanlderDelete = (id)=>{
    dispatch(deletePokemon(id))
    dispatch(getAllPokemons())
    navigate('/home')
  }
  return ( 
    <div className="container-detail">
      <Link to="/home">
      <img className="exit-img2" src={exit} alt="" />
      </Link>
      {Object.keys(pokemonsDetails).length ? (
        <div className="detail-general">
          <div className="conImgName">
            <img src={pokemonsDetails.image} alt={pokemonsDetails.name} />
            <h1>{pokemonsDetails.name}</h1>
            {
              pokemonsDetails.created === true ? (<div className="div-button"><button className="button-detail" onClick={()=>hanlderDelete(id)}>Delete</button><Link to={`/create/${id}`}><button className="button-detail">Update</button></Link></div>) : <div></div>
            }
          </div>
          <div className="container-description">
            <div className="description">
              <p>Life: {pokemonsDetails.life}</p>
              <img className="iconDetail" src={iconDumbbell} alt="" />
            </div>
            <div className="description">
              <p>Attack: {pokemonsDetails.attack}</p>
              <img className="iconDetail" src={iconKatana} alt="" />
            </div>
            <div className="description">
              <p>Defense: {pokemonsDetails.defense}</p>
              <img className="iconDetail" src={iconShield} alt="" />
            </div>
            <div className="description">
              <p>Speed: {pokemonsDetails.speed}</p>
              <img className="iconDetail" src={iconRunning} alt="" />
            </div>
            <div className="description">
              <p>Height: {pokemonsDetails.height}</p>
              <img className="iconDetail" src={iconAltura} alt="" />
            </div>
            <div className="description">
              <p>Weight: {pokemonsDetails.weight}</p>
              <img className="iconDetail" src={iconBascula} alt="" />
            </div>
          </div>
          <div>
            <div>
              <ul className="ulTypes">
                {pokemonsDetails.types.map((type) =>{
                  return <li key={type}>{type} <img className="iconType" src={name[type]} alt="" /> </li>
                }
                )}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <span className="loader">Loading</span>
      )}
    </div>
  );
};

export default DetailPokemon;
