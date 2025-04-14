//Organize os produtos de acordo com o apresentado em sala
//Moatre apenasos produtos que forem mais caros que R$ 1500



const Exercicio2 = () => {

    const produtos = [
        {
            id: 1,
            nome: "Smartphone",
            preco: "R$ 2000",
            cores: ["#29d8d5", "#252a34", "#fc3766"]
        },
        {
            id: 2,
            nome: "Notebook",
            preco: "R$ 3000",
            cores: ["#ffd045", "#d4394b", "#f37c59"]
        },
        {
            id: 3,
            nome: "Tablet",
            preco: "R$ 1500",
            cores: ["#ff045", "#47c1c8", "#f95786"]
        }
    ]

    
        const produtosFiltrados = produtos.filter((produto) => Number(produto.preco.replace("R$ ", "")) > 1500);
    
        return (
            <div>
                {produtosFiltrados.map((produto) => (
                    <div key={produto.id}>
                        <h2>{produto.nome}</h2>
                        <p>Preço: {produto.preco}</p>
                        <ul>
                            {produto.cores.map((cor, index) => (
                                <li key={index} style={{ backgroundColor: cor }}>{cor}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        )
    }

export default Exercicio2