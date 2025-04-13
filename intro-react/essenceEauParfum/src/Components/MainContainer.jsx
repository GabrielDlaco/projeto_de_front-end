
const MainStyle = {
  height: "475px",
  width: "600px",
  display: "flex",
  borderRadius: "12px",
  padding: "12px"
}

const MainContainer = ({children}) => {
  return(
    <main style={MainStyle}>{children}</main>
  )
}

export default MainContainer