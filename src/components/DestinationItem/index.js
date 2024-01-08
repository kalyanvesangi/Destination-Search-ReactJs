// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem

  return (
    <li className="destination-item-con">
      <img className="destination-item-img" src={imgUrl} alt={name} />
      <p className="destination-item-name">{name}</p>
    </li>
  )
}

export default DestinationItem
