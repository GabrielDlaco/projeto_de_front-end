import ContainerImg from '../Components/ContainerImg'
import MainContainer from '../Components/MainContainer'
import ContainerInfo from '../Components/ContainerInfo'
import Item from '../Components/item'
import Title from '../Components/Title'
import Description from '../Components/Description'
import DivPrice from '../Components/DivPrice'
import Price from '../Components/Price'
import Promotion from '../Components/Promotion'

const App = () => {
    return(
        <>
            <MainContainer>

                <ContainerImg />

                <ContainerInfo>

                    <Item />

                    <Title />

                    <Description />

                    <DivPrice>
                        <Price />
                        <Promotion />
                    </DivPrice>

                </ContainerInfo>

            </MainContainer>
        </>
    )
}

export default App