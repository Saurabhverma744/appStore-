import './index.css'

const TabItem = props => {
  const {topic, updateButton, isActive} = props
  const {tabId, displayText} = topic

  const handleButton = () => {
    updateButton(tabId)
  }

  const buttonColor = isActive ? 'new-btn' : ''

  return (
    <li className="list">
      <button
        type="button"
        className={`button ${buttonColor}`}
        onClick={handleButton}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
