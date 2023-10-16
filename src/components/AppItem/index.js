import './index.css'

const AppItem = props => {
  const {imageElement} = props
  const {appName, imageUrl} = imageElement

  return (
    <li className="lists contain">
      <img src={imageUrl} alt={appName} className="img" />
      <p className="name">{appName}</p>
    </li>
  )
}
export default AppItem
