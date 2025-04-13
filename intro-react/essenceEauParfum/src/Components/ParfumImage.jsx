import ImageParfum from '../assets/image-product-desktop.jpg'

const ImageStyle = {
  height: "100%",
  width: "100%",
  borderTopLeftRadius: "12px",
  borderBottomLeftRadius: "12px"
}

const ParfumImage = () => {
  return(
    <img style={ImageStyle} src={ImageParfum} alt="Imagem do perfume" />
  )
}

export default ParfumImage