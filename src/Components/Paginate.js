import { Row, Col, Pagination } from 'react-bootstrap';


const Paginate = ({next, prev, handlerPages}) => {
    
    // Al tocar los botones se llama a la función que setea una nueva url. Cambia el estado de Characters
    const handlerNext = () => {
        // split devuelve array de 2 posiciones. Destructuro y me quedo con la segunda
        const [,query] = next.split("?");
        // envío nuevo endpoint a Characters
        handlerPages(query);
    }
    
    const handlerPrev = () => {
        const [,query] = prev.split("?");
        handlerPages(query);
    }
    
    return ( 
        <Row>
            <Col>
                <Pagination className="justify-content-center">
                    {/* Evaluar si Prev es true para mostrar o no el botón Previo.
                    Por defecto la API tiene "prev" en null */}
                    {!!prev && <Pagination.Prev onClick={handlerPrev}/>}
                    <Pagination.Next onClick={handlerNext}/>
                </Pagination>
            </Col>
        </Row>
     );
}
 
export default Paginate;