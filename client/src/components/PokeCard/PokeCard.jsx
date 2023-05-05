import "./PokeCard.css";
//! icon types
import bug from '../../img/iconDetail/Bug.ico'
import dark from '../../img/iconDetail/Dark.ico'
import dragon from '../../img/iconDetail/Dragon.ico'
import electric from '../../img/iconDetail/Electric.ico'
import fairy from '../../img/iconDetail/Fairy.ico'
import fighting from '../../img/iconDetail/Fighting.ico'
import fire from '../../img/iconDetail/Fire.ico'
import flying from '../../img/iconDetail/Flying.ico'
import ghost from '../../img/iconDetail/Ghost.ico'
import grass from '../../img/iconDetail/Grass.ico'
import ground from '../../img/iconDetail/Ground.ico'
import ice from '../../img/iconDetail/Ice.ico'
import normal from '../../img/iconDetail/Normal.ico'
import poison from '../../img/iconDetail/Poison.ico'
import psychic from '../../img/iconDetail/Psychic.ico'
import rock from '../../img/iconDetail/Rock.ico'
import steel from '../../img/iconDetail/Steel.ico'
import water from '../../img/iconDetail/Water.ico'

import { Link } from "react-router-dom";

const PokeCard = ({ id, name, image, types }) => {
  let icon = { bug, dark, dragon, electric, fairy, fighting, fire, flying,ghost,grass, ground, ice, normal, poison, psychic, rock, steel, water  }
  return (
    <Link to={`/DetailPokemon/${id}`}>
      <div className="card">
        <div className="card-image">
          <img className="image" src={image} alt={name} />
        </div>
        <div className="nameCard">
          <h1 className="pokeName">{name}</h1>
        </div>
        <div className="typeCard">
          <ul className="ul">
            {types.map((type) => (
              <li
                key={type}
                className="listas"
              >
                <img className="iconCard" src={icon[type]} alt="" />
                {type}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default PokeCard;
