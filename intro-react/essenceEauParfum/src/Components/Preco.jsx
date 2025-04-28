


const Preco = ({preco, precoOriginal, desconto}) => {
    return(
        <>
        <span className="container-preco">
        <p className="preco-atual">$ {preco}</p>
        {desconto === true ?
        <p className="preco-original">$ {precoOriginal}</p>
        :
        null
    }
        </span>
        </>
    )
}

export default Preco