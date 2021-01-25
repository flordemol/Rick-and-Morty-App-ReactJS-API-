import { Toast, Image } from 'react-bootstrap';

const Favorite = ({image, name}) => {
    return (     
        <Toast className='mt-2'>
            <Toast.Body className="d-flex justify-content-between align-items-center" >
                <Image src={image} thumbnail style={{"width": "100px"}}/>
                <strong className="mr-auto">{name}</strong>
                <small><i className="fas fa-trash"></i></small>
            </Toast.Body>
        </Toast> 
    );
}
 
export default Favorite;