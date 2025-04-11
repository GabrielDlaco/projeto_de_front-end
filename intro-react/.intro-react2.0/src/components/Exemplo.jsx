import "./style.css"

const nome = "Gabriel"
const preco = 300
const desconto = 50

function Soma (){
    return console.log("Olá!")
}

function meuNome () {
    return "Gabriel"
}

function areaQuadrado (lado) {
    return lado * lado
}

const paragrafoStyle = {
    color: "tomato",
    backgroundColor: "aquamarine",
    fontSize: " 20px",
    fontWeight: "bold"
}

const ativo = false

const salario = 1800

const carro = {
    portas: "4",
    motor: "1.6 Turbo",
    modelo: "HB20",
    cor: "cinza"
}

const Exemplo = () => {
    return(
        <>
        <h1>{nome}</h1>
        <p style={paragrafoStyle}>valor com desconto é igual a: {preco - desconto}</p>
        <button style={{backgroundColor: "red"}} onClick={Soma}>Enviar</button>
        <p>{'Meu paragrafo maiúsculo'.toUpperCase()}</p>
        <p>{30 * 10}</p>
        <p>{meuNome()}</p>
        <p>A área do quadrado é: {areaQuadrado(10)}</p>
        {/* O primeiro paragrafo irá aparecer o 'const ativo' esteja true, pois é o que indica caso seja verdader, já o segundo paragrafo irá aparecer caso a condição seja falsa */}
        {ativo === true ? <p>Está ativo!</p> : <p>Está inativo</p>}
        {salario < 2000 ? <p>Você é muito pobre!</p> : <p>Você não é tão pobre!</p>}
        <p>O carro é um {carro.modelo}. O  motor é {carro.motor}</p>
        </>

    )
        
}

export default Exemplo;