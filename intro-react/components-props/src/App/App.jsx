import Container from "../components/Container";
import Form from "../components/Form";
import Header from "../components/Header";
import Titulo from "../components/Titulo";


const App = () => {

    const logado = true;
    const usuario = "Gabriel"

    return(
        <>
        <Container>
            <Header logado={logado} usuario={usuario} />
            <Form />
            <Titulo texto="Esse é o meu título" cor="blue" />
            <Titulo texto="Esse é o meu segundo título" />
        </Container>
        </>
    )
}

export default App;