import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardPokemon from "../components/CardPokemon";

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({}); 

  const url = `https://pokeapi.co/api/v2/pokemon`;
  const getPokemon = async (name) => {
    try {
      const response = await fetch(`${url}/${name}`);
      if (!response.ok) {
        throw new Error("ERROR NO HAY DATOS");
      }
      const data = await response.json();
      const src = data.sprites.other.dream_world.front_default;
      const stats = data.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat,
      }));
      const type = data.types.map(({type}) => type.name).join(" ")
      setPokemon({name, src, stats, type})
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() =>{
getPokemon(name)
}, [name])
  return <CardPokemon pokemon={pokemon} />;
};

export default Details;
