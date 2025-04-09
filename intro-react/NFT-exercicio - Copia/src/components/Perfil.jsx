import ImagemPerfil from '../assets/image-avatar.png'

const Perfil = () => {
    return(
       <div className='perfil'>
         <img src={ImagemPerfil} alt="" />
         <p className='paragrafo'>Creation of <strong>Jules Wyvern</strong></p>
       </div>
    )
}

export default Perfil