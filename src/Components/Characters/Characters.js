import Character from "./Character";
import {useEffect, useState} from "react";
import {Row} from "react-bootstrap";

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
            <Character />
        </Row>
     );
}
 
export 

default Characters;