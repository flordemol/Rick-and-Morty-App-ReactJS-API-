import {useState} from "react";
import {Row, Col, Button, Form} from "react-bootstrap";


const Search = () => {
    
    const [characters, setCharacters] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();
    }
    
    const handlerInput = (e) => {
        setCharacters(e.target.value);
        
        // Para hacer buscador en tiempo real usar setTimeout de 300 a 500 milisegundos
    }

    return ( 
        <Row className="justify-content-center">
            <Col md={6}>
                <Form onSubmit={handlerSubmit}> {/*onSubmit se encarga de pasar la info de búsqueda a characters a través del nodo común*/}
                    <Form.Group>
                        <Form.Control 
                            type="text"
                            placeholder="Buscar por nombre"
                            onChange={handlerInput} // Setea estado local del componente
                        />
                    </Form.Group>
                    <Button type="submit">Buscar</Button>
                </Form>
            </Col>
        </Row>
     );
}
 
export default Search;