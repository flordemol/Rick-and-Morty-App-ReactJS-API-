import Character from "./Character";
import {useEffect, useState} from "react";
import {Row} from "react-bootstrap";

import ClipLoader from "react-spinners/ClipLoader";

const BASE_URL = "https://rickandmortyapi.com/api";

// Componente de lógica (petición HTTP + map)
const Characters = () => {

    // Estado inicial de petición HTTP
    const [characters, setCharacters] = useState([]); // resultado de la petición (inicial, array vacío)
    const [fetching, setFetching] = useState(true); // estado de carga (loading)
    const [error, setError] = useState(false); // errores

    const getCharacters = async (endpoint) => {
        try {
            const result = await fetch(`${BASE_URL}/${endpoint}`); // get
            const data = await result.json(); // parseo a json
            setCharacters(data.results); // Array de personajes (data devuelve info y results)
            setFetching(false); // false cuando termina de cargar la petición
        } catch (e) {
            // Configuración de estado cuando hay error
            setError(true);
            setFetching(false);
            setCharacters([]);
        }
       
    }

    useEffect(() => {
        // Petición de personajes
        getCharacters("character");
    }, []); // dependencias vacías para ejecutar 1 sola vez
    
    return ( 
        <Row>
            {
                fetching ? (
                    <ClipLoader color={"green"} loading={fetching} css={{display: "block", margin: "0 auto"}} size={150} /> // loading es condición de carga - css es json
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