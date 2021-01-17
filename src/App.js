import Characters from "./Components/Characters";
import {Container} from "react-bootstrap";
import Search from "./Components/Search";
function App() {
  
  return (
    <Container>
      <Search />
      <Characters />
    </Container>
  );
}

export default App;
