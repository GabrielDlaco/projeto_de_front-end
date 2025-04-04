import Container from '../components/Container'
import Image from '../components/Image'
import TitleImg from '../components/TitleImg';
import SectImg from '../components/SectImg';
import Description from '../components/description'
import SectETH from '../components/SectETH';
import Ethereum from '../components/ethereum';
import InfoTime from '../components/InfoTime';
import HR from '../components/HR'
import SectCreator from '../components/SectCreator';
import ImgCreator from '../components/ImgCreator';
import CreationOf from '../components/CreationOf';
import Creator from '../components/Creator';

const App = () => {
    return(
        <Container>
            <SectImg>
                <Image />
                <TitleImg />
            </SectImg>
            <Description />
            <SectETH>
                <Ethereum />
                <InfoTime />
            </SectETH>
            <HR />
            <SectCreator>
                <ImgCreator />
                <CreationOf />
                <Creator />
            </SectCreator>
        </Container>
    )
}

export default App;