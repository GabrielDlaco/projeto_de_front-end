

const Header = ({logado, usuario}) => {
    if(logado){
        return <header>Olá, {usuario}</header>
    }else{
        return <header>Header</header>
    }
}

export default Header