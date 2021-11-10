// Write your code here
import './index.css'

const AppItem = props => {
  const {projectDetails} = props
  const {appName, imageUrl} = projectDetails

  return (
    <li className="app-items-list">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="name">{appName}</p>
    </li>
  )
}

export default AppItem
