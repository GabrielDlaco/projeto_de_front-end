import Categoria from "../Components/Categoria"
import ContainerDescricao from "../Components/ContainerDescricao"
import ContainerPrincipal from "../Components/ContainerPrincipal"
import Descricao from "../Components/Descricao"
import Preco from "../Components/Preco"
import Titulo from "../Components/Titulo"



const App = () => {
    return(
        <ContainerPrincipal>

         <div>
            <Imagem />
        </div>

        <ContainerDescricao>
        <Categoria texto={"perfume"} />
        <Titulo texto={"Gabrielle Essence Eau De Parfum"} />
        <Descricao texto={"A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL"} />
        <Preco preco={149.99} precoOriginal={169.99} desconto={true} />
        </ContainerDescricao>

        </ContainerPrincipal>
    )
}

export default App