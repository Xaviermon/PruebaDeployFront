import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import { getAllPokemons } from "../redux/actions";



const Cards = () => {
  const dispactch = useDispatch()
  const pokemons = useSelector((state)=> state.pokemons)

  useEffect(()=>{
    dispactch(getAllPokemons())
  },[dispactch])

  return (
    <>
      {
        pokemons.map(({id, name, image, types}) => {
          return (
            <Card 
            key={id}
              id={id}
              name={name}
              image={image}
              types={types}
            />
          )
        })
      }
    </>
  )
};


export default Cards;