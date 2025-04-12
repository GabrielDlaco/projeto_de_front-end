import icon from '../assets/icon-cart.svg'

const Button = () => {
  return(
    <button className="button"><img src={icon} alt="Ícone de carrinho" />Add to Cart</button>
  )
}

export default Button