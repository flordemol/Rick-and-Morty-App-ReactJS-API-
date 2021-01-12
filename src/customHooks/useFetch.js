import { useState, useEffect } from "react"

const BASE_URL = "https://rickandmortyapi.com/api";

// Por defecto API trae objeto, por eso lo agrego en initialState
// si necesito traer un array se aclara en el llamado de la función, en el 2do parametro
// useFetch(url,[]);
export const useFetch = ( endpoint, initialState = {} ) => {
    // Estado inicial: datos, loading, error
    const [data, setData] = useState(initialState);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);

    // Se crea esta función porque el useEffect no puede ser async. Se pasa al useEffect luego de resuelta la Promesa
    const fetchData = async () => {
        try {
            const result = await fetch(`${BASE_URL}/${endpoint}`);
            const data = await result.json();
            setData(data);
            setFetching(false);
        } catch (e) {
            setData(initialState);
            setFetching(false);
            setError(true);
        }
    }    

    useEffect(() => {
        fetchData();
    }, [endpoint]); // se vuelve a ejecutar solo si cambia la url

    return [data, fetching, error];
}