import { Row, Col } from "react-bootstrap";
import Favorite from "../Favorite";

const Aside = ({favorite}) => {

    //console.log(favorite);

    return ( 
        <Col md={4}>
            <h4 className="text-center mb-3">Favoritos</h4>

            <Row>
                {
                    favorite.length ? (
                        favorite.map((fav) => <Favorite key={fav.id} {...fav}/>)
                        ) : (
                            <h5>No hay favoritos...</h5>
                        )
                }
            </Row>

        </Col>
    );
}
 
export default Aside;<h3>Aside</h3>