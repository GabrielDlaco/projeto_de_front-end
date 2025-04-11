//Mostre os dados da aplicação conforme demonstrado em sala
//Não utilize css externo, use style para mudar as cores
//Se a situação estiver ativa, pinte de verde, se estiver inativa, pinte de vermelho

const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
        {nome: "notebook", preco: "R$ 300"},
        {nome: "smartphone", preco: "R$ 1500"},
        {nome: "geladeira", preco: "R$ 3000"},
    ],
    ativo: true
}

const lucas = {
    cliente: "Lucas",
    idade: 32,
    compras: [
        {nome: "notebook", preco: "R$ 4000"},
        {nome: "smartphone", preco: "R$ 1000"},
        {nome: "televisao", preco: "R$ 3000"},
        {nome: "guitarra", preco: "R$ 2500"},
    ],
    ativo: false
}

const situacaoTrue = {
    color: "green"
}

const situacaoFalse = {
    color: "red"
}

const ExercicioUm = () => {
    const dados = luana // ou lucas
    const valores = dados.compras.map((dado) => (dado.preco.replace("R$", "")))
    const soma = valores.reduce((a , b) => a + b)
    return(
        <>
        <p>Nome: {dados.cliente}</p>
        <p>idade: {dados.idade}</p>
        <span>Situação: {dados.ativo === true ? <span style={situacaoTrue}>Ativa</span> : <span style={situacaoFalse}>Inativo</span>}</span>
        <p>Total: {soma}</p>
        </>
    )
}

export default ExercicioUm