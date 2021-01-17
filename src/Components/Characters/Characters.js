import { useEffect, useState } from "react";
import { useFetch } from "../../customHooks/useFetch";
import {Row} from "react-bootstrap";
import Character from "./Character";
import Loading from "../Loading";
import Paginate from "../Paginate";

const BASE_ENDPOINT = "character";

// Componente de lógica (petición HTTP + map)
const Characters = ({ search }) => {

    // Estado de la URL para saber qué renderizar. Por defecto será "character" (todos los personajes)
    const [ url, setUrl ] = useState(BASE_ENDPOINT);
    
    // Actualiza componente cuando llegue search distinto
    useEffect(() => {
        console.log("Busca: " + search);
        
        // Generar nueva url con parametro de busqueda del search
        // BASE_URL/character?name=search
        const newUrl = !search ? BASE_ENDPOINT : `${BASE_ENDPOINT}/?name=${search}`;

        // Setear la URL con la búsqueda para volver a renderizar
        setUrl(newUrl);
    }, [search]);

    // Petición HTTP
    const [ data, fetching, error ] = useFetch(url); // Pasar la url dinámica para que useFetch renderice según la url (la recibe como parametro endpoint) 
    const { info, results: characters } = data; // destructuring del objeto data y renombrar results
    
    // Se encarga de setear la url. Altera el componente Characters y le indica cuales mostrar
    const handlerPages = ( newUrl ) => {
        setUrl(`${BASE_ENDPOINT}?${newUrl}`);
    }

    return ( 
        <>
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

            {/* Info envía valores "next" y "prev" de la API 
            handlerPages envía la url en la que me encuentro*/}
            <Paginate {...info}  handlerPages={handlerPages}/>
        </>
     );
}
 
export 

default Characters;