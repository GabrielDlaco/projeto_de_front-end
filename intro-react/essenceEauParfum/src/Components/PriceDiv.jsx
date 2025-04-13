
const divPrice = {
  display: "flex",
  alignItems: "center",
  gap: "1rem"
}

const Price = {
  fontFamily: "Fraunces, serif",
  color: "hsl(158, 36%, 37%)"
}

const Promotion = {
  fontFamily: "Fraunces, serif",
  textDecoration: "line-through"
}

const PriceDiv = () => {
  return(
    <div style={divPrice}>
      <h1 style={Price}>$149.99</h1>
      <p style={Promotion}>$169.99</p>
    </div>
  )
}

export default PriceDiv