import { Row, Col, Pagination } from 'react-bootstrap';

const Paginate = () => {
    return ( 
        <Row>
            <Col>
                <Pagination className="justify-content-center">
                    <Pagination.Prev />
                    <Pagination.Next />
                </Pagination>
            </Col>
        </Row>
     );
}
 
export default Paginate;