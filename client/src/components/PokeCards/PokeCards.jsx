import './PokeCards.css'
import PokeCard from "../PokeCard/PokeCard";  

const PokeCards = ({currentPokemons}) => {

  return(
    <div className="cards-container" >
      {
        currentPokemons.map(({id, name, image, types})=>{
          return(
            <PokeCard 
              key={id}
              id={id}
              name={name}
              image={image}
              types={types}
            />
          )
        })
      }
    </div>
  )
};

export default PokeCards;
