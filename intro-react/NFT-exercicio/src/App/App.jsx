import Container from '../components/Container'
import Image from '../assets/image-equilibrium.jpg'
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
import view from '../assets/icon-view.svg'

const App = () => {
    return(
        <Container>
            <SectImg>
            <div className='image-container'>
                <img className='img-equilibrium' src={Image} alt="" />
                <div className='overlay'>
                    <img src={view} alt="" />
                </div>
            </div>
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