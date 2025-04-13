import icon from '../assets/icon-cart.svg'

const Container = {
  backgroundColor: "hsl(0, 0%, 100%)",
  height: "100%",
  width: "100%",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  borderTopRightRadius: "12px",
  borderBottomRightRadius:"12px",
  gap: "1.725rem"
}

const Item = {
  fontFamily: "'Montserrat', sans-serif",
  letterSpacing: "8px",
  fontWeight: "700",
  color: "hsl(228, 12%, 48%)"
}

const Title = {
  fontFamily: "'Fraunces', serif",
  fontWeight: "700",
  
}

const Description = {
  fontFamily: "'Montserrat', sans-serif",
  color: "hsl(228, 12%, 48%)",
  fontWeight: "700px",
  fontSize: "14px",
}

const Button = {
  cursor: "pointer",
  fontFamily: "'Montserrat', sans-serif",
  padding: "15px",
  backgroundColor: "hsl(158, 36%, 37%)",
  borderRadius: "10px",
  border: "none",
  color: "hsl(0, 0%, 100%)",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
}

const InfoContainer = ({children}) => {
  return(
    <div style={Container}>
      
      <p style={Item}>PERFUME</p>

      <h1 style={Title}>Gabrielle Essence Eau De Parfum</h1>

      <p style={Description}>A floral solar and voluptuous interpretation composed by Olivier Pole, Perfumer-Creator for the House of CHANEL.</p>

      <div className="PriceDiv">{children}</div>

      <button style={Button}><img src={icon} alt="Ícone de carrinho" />Add to Cart</button>

    </div>
  )
}

export default InfoContainer