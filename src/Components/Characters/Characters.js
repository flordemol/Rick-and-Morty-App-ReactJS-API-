import Character from "./Character";
import Loading from "../Loading";
import {Row} from "react-bootstrap";
import { useFetch } from "../../customHooks/useFetch";

// Componente de lógica (petición HTTP + map)
const Characters = () => {

  const [ data, fetching, error ] = useFetch("character");
  const { info, results: characters } = data; // destructuring del objeto data y renombrar results
    
    return ( 
        <Row>
            {
                // Evaluar estado de loading
                fetching ? (
                   <Loading />
                ) : (
                    characters.map((character) => 
                        <Character key={character.id} {...character}/> 
                        // "map" siempre se pasa con una "key"
                        // {...character} pasa todas las propiedades y todos los valores. Sin descomponer: character={character} o id={character.id} name={character.name} etc
                ))
            }
        </Row>
     );
}
 
export 

default Characters;