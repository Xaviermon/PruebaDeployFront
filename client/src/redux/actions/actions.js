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
} from "./actions-types";
import axios from "axios";

export const getAllPokemons = () => {
  return async function (dispatch) {
    try {
      const json = await axios.get("/pokemons");
      const data = json.data;
      return dispatch({
        type: GET_ALL_POKEMONS,
        payload: data,
      });
    } catch (error) {
      alert(error.response.data.error)
    }
  };
};

export const getPokemonDetail = (id) => {
  return function (dispatch) {
    axios(`/pokemons/${id}`)
      .then((response) => response.data)
      .then((data) => {
        return dispatch({
          type: GET_POKEMON_DETAIL,
          payload: data,
        });
      })
      .catch(error => error)
  };
};

export const cleanCharacterDetail = () => {
  return { type: CLEAN_CHARACTER_DETAIL };
};

export const getAllTypes = () => {
  return async function (dispatch) {
    const json = await axios.get("/types");
    const result = json.data;
    return dispatch({
      type: GET_ALL_TYPES,
      payload: result,
    });
  };
};

export const filterPerTypes = (payload) => {
  return {
    type: FILTER_PER_TYPES,
    payload: payload,
  };
};

export const filterPerAttack = (payload) => {
  return function (dispatch) {
    return dispatch({
      type: FILTER_PER_ATTACK,
      payload: payload,
    });
  };
};

export const filterPerName = (payload) =>{
  return function(dispatch){
    return dispatch({
      type: FILTER_PER_NAME,
      payload: payload
    })
  }
}

export const searchByName = (name) =>{
  return async function (dispatch) {
    axios(`/pokemons?name=${name}`)
      .then(response => response.data)
      .then(data => {
        data.length === 0 ? alert('Pokemon does not exist') :
        dispatch({
          type : SEARCH_BY_NAME,
          payload: data
        })
      })
      .catch(error => error.response)
  }
}
export const filterPerCreated = (payload) =>{
  return function (dispatch){
    return dispatch({
      type: FILTER_PER_CREATED,
      payload: payload
    })
  }
}

export const postPokemon = (payload)=>{
  return async function(dispatch){
    try {
      const response = await axios.post("/pokemons", payload)
      return dispatch({
        type : POST_POKEMONS,
        payload : response.data
      }) ? alert('creado') : response
    } catch (error) {
      return alert(error.response.data.error)
    }
  }
}
export const deletePokemon = (id) =>{
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/pokemons/${id}`)
      return dispatch({
        type: DELETE_POKEMONS,
        payload: response
      }) ? alert('Pokemon Eliminado') : response
    } catch (error) {
      return alert(error.response.data.error)
    }
  }
}
export const updatePokemon = (id, payload) =>{
  return async function(dispatch){
    axios.put(`/pokemons/${id}`, payload)
    .then(response => {
      alert('Pokemon actualizado')
      return dispatch({
        type: UPDATE_POKEMON,
        payload: response
      })
    })
    .catch(error => alert(error.response.data))
  }
}