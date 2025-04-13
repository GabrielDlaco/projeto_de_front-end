import InfoContainer from '../Components/InfoContainer'
import MainContainer from '../Components/MainContainer'
import ParfumImage from '../Components/ParfumImage'
import PriceDiv from '../Components/PriceDiv'


const App = () => {
    return(
        <>
            <MainContainer>

                    <ParfumImage />

                <InfoContainer>
                    <PriceDiv />
                </InfoContainer>

            </MainContainer>
        </>
    )
}

export default App