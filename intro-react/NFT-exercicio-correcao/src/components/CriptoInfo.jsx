import ethereumIcon from '../assets/icon-ethereum.svg'
import iconClock from '../assets/icon-clock.svg'

const CriptoInfo = () => {
  return(
    <div className='cripto-info'>
      <span>
        <img className='icon-ethereum' src={ethereumIcon} alt="Ethereum icon" />
        <p className="cripto-value">0.041 ETH</p>
      </span>
      <span>
        <img src={iconClock} alt="Clock icon" />
        <p className="info-time">3 days left</p>
      </span>
    </div>
  )
}

export default CriptoInfo