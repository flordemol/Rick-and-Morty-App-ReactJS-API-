import Characters from "./Components/Characters";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Search from "./Components/Search";
import Aside from './Components/Layout/Aside';

function App() {

  // Estado inicial de Search (vacío)
  // null para que se envíe FALSE de búsqueda
  const [search, setSearch] = useState(null);
  
  const handlerSearch = (value) => {
    setSearch(value);
  }

  const [favorite, setFavorite] = useState([]);
  
  const handlerFavorite = (value) => {
    setFavorite(value);
  }

  return (
    <Container>
      <Search handlerSearch={handlerSearch}/> {/*Le paso la función encargada de compartir el estado*/}
      <Row className="m-0 p-3">
        <Aside favorite={favorite}/>
        <Characters search={search} favorite={favorite} handlerFavorite={handlerFavorite}/> {/* Le paso las props "search" */}
      </Row>
    </Container>
  );
}

export default App;
