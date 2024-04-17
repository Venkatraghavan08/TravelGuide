import './index.css'

const TravelGuide = props => {
  const {details} = props
  const {name, imageUrl, description} = details
  return (
    <li className="list-event">
      <img src={imageUrl} className="img" alt={name} />
      <h1 className="heading">{name}</h1>
      <p className="description">{description}</p>
    </li>
  )
}
export default TravelGuide
