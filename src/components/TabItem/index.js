// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updatedTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onChangeActiveTab = isActive ? 'tab-button active' : 'tab-button'

  const onChangeTabId = () => {
    updatedTabId(tabId)
  }

  return (
    <li className="tab-items">
      <button
        type="button"
        className={onChangeActiveTab}
        onClick={onChangeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
