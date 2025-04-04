import Container from '../components/Container'
import Image from '../components/Image'
import TitleImg from '../components/TitleImg';
import SectImg from '../components/SectImg';

const App = () => {
    return(
        <Container>
            <SectImg>
            <Image />
            <TitleImg />
            </SectImg>
        </Container>
    )
}

export default App;