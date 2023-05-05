import {
  GET_ALL_POKEMONS,
  GET_POKEMON_DETAIL,
  CLEAN_CHARACTER_DETAIL,
  FILTER_PER_TYPES,
  GET_ALL_TYPES,
  FILTER_PER_ATTACK,
  FILTER_PER_NAME,
  SEARCH_BY_NAME,
  FILTER_PER_CREATED,
  POST_POKEMONS,
  DELETE_POKEMONS,
  UPDATE_POKEMON
} from "./actions/actions-types";

const initialState = {
  pokemons: [],
  allPokemons: [],
  auxAllPokemons: [],
  pokemonsDetails: {},
  allTypes: [],
};

const reducer = (state = initialState, action) => {
  const allPokemons = state.allPokemons;
  const aux = state.auxAllPokemons;
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
        auxAllPokemons: action.payload,
      };
    case GET_POKEMON_DETAIL:
      return {
        ...state,
        pokemonsDetails: action.payload,
      };
    case CLEAN_CHARACTER_DETAIL:
      return {
        ...state,
        pokemonsDetails: {},
      };
    case FILTER_PER_TYPES:
      const TypesPokemons = allPokemons;
      const typerFilter =
        action.payload === "All"
          ? TypesPokemons
          : TypesPokemons.filter((el) => el.types.includes(action.payload));
      return {
        ...state,
        pokemons: typerFilter,
      };
    case FILTER_PER_ATTACK:
      const filterPerAttack = allPokemons.sort((pokeA, pokeB) => {
        if (action.payload === "up") return pokeA.attack - pokeB.attack;
        return pokeB.attack - pokeA.attack;
      });
      return {
        ...state,
        pokemons: filterPerAttack,
      };

    case FILTER_PER_NAME:
      const filterPerName = allPokemons.sort((pokeA, pokeB) => {
        if (action.payload === "up")
          return pokeA.name.toLowerCase() < pokeB.name.toLowerCase() ? -1 : 0;
        return pokeB.name.toLowerCase() < pokeA.name.toLowerCase() ? -1 : 0;
      });
      return {
        ...state,
        pokemons: action.payload === "-" ? aux : filterPerName,
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };

    case FILTER_PER_CREATED:
      const filterPerCreated = state.allPokemons.filter((elem) => elem.created.toString() === action.payload.toString());
      return {
        ...state,
        pokemons: action.payload === "All" ? aux : filterPerCreated,
      };

    case GET_ALL_TYPES:
      return {
        ...state,
        allTypes: action.payload,
      };
    
    case POST_POKEMONS:
      return {
        ...state,
      }
    case DELETE_POKEMONS:
      return {
        ...state
      }  
    case UPDATE_POKEMON:
      return{
        ...state
      }  
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
