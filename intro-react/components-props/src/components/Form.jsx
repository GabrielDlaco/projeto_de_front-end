import Button from './Button'
import Input from './Input'


const Form = () =>{
    return(
        <form>
            <p>
                <label>Nome</label>
                <Input/>
            </p>
            <p>
                <label>Sobrenome</label>
                <Input style={{backgroundColor: "red"}} />
            </p>
            <Button />
        </form>
    )
}

export default Form