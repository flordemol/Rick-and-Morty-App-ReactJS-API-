import { Col, Card, Button } from "react-bootstrap";
import moment from "moment";

// Componente de presentación
const Character = ({ id, name, gender, status, species, created, image, favorite, handlerFavorite }) => {

    const addFavorite = () => {
        const character = {
            id,
            name, 
            image
        }
        handlerFavorite([...favorite, character]);
    }

    const isFavorite = () => favorite.find((fav) => id === fav.id);

    return ( 
        <Col md={4} className="my-3 text-center">
            <Card>
                <Card.Img variant={"top"} src={image} />
                <Card.Body>
                    <Card.Title>
                        {name} - {gender}
                    </Card.Title>
                    <Card.Text className={ status === "Alive" ? "text-info" : "text-danger" }>
                        {status === "Alive" ? "Vivo" : "Muerto"} - {species}
                    </Card.Text>
                    <Card.Text>
                        <small>{moment(created).format("DD/MM/yyyy")}</small>
                    </Card.Text>
                    <Card.Text>
                        {
                            isFavorite() ? (
                                <i className={`fas fa-star mt-3 d-block text-warning`}></i>
                            ) : (
                                <i className={`fas fa-star mt-3 d-block text-dark`} onClick={addFavorite} style={{ cursor: "pointer" }}></i>
                            )
                        }

                    </Card.Text>    
                    <Button type="button" variant="primary" style={{ width: '100%' }}>
                        Ver más
                    </Button>
                </Card.Body>
            </Card>
        </Col>
     );
};
 
export default Character;