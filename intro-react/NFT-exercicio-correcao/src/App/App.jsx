import Container from '../components/Container'
import CriptoInfo from '../components/CriptoInfo';
import ImagemPrincipal from '../components/ImagemPrincial';
import Paragrafo from '../components/Paragrafo';
import Titulo from '../components/Titulo';
import Perfil from '../components/perfil';


const App = () => {
    return(
        <Container>
            <ImagemPrincipal />
            <Titulo />
            < Paragrafo />
            <CriptoInfo />
            <Perfil />
        </Container>
    )
}

export default App;