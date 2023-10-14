import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const PokemontsContext = createContext();
const PokemontsContextProvider = ({ children }) => {
    const [character, setCharacter] = useState([]);
    const [characterSelected, setCharacterSelected] = useState("");
    useEffect(() => {
        axios
        
         
          .get(`https://pokeapi.co/api/v2/pokemon`)
          .then((response) => {
            setCharacter(response.data.results);
            
            //console.log(response.data.results);
          }).catch((err) => {
            console.log(err);
          });
      },[]);
    return (
      <PokemontsContext.Provider value={{ character, setCharacter, characterSelected, setCharacterSelected}}>
        {children}
      </PokemontsContext.Provider >
    );
  };
  export default PokemontsContextProvider;