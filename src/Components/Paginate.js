import { Row, Col, Pagination } from 'react-bootstrap';


const Paginate = ({next, prev}) => {
    
    const handlerNext = () => {
        console.log(next);
    }
    
    const handlerPrev = () => {
        console.log(prev);
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