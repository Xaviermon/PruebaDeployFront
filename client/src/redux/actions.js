import { GET_ALL_POKEMONS } from "./action-types";
import axios from 'axios'

export const getAllPokemons = () =>{
    return async (dispatch) => {
        const json = await axios('/pokemons')
        const result = json.data;
        return dispatch({
            type: GET_ALL_POKEMONS,
            payload: result
        })
    }
}