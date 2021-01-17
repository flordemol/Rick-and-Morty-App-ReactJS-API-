import Characters from "./Components/Characters";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Search from "./Components/Search";

function App() {

  // Estado inicial de Search (vacío)
  const [search, setSearch] = useState("");
  
  const handlerSearch = (value) => {
    setSearch(value);
  }

  return (
    <Container>
      <Search handlerSearch={handlerSearch}/> {/*Le paso la función encargada de compartir el estado*/}
      <Characters search={search}/> {/* Le paso las props "search" */}
    </Container>
  );
}

export default App;
