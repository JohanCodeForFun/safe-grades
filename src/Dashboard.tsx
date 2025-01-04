import { useState } from 'react'
import './styles/Dashboard.css'

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleVM = () => {
    setIsToggled(!isToggled);
  }
  return (
    <div className={isToggled ? 'split-screen' : 'fullscreen'}>
      <div className="left">

      <h1>Dashboard</h1>
      <button onClick={handleToggleVM}>
        {isToggled ? 'Shutdown VM' : 'Launch VM'}
        </button>
        {isToggled && <div>Virtual machine is on.</div>}
      </div>
      <div>
        <div className="right">
          world
        </div>
      </div>
    </div>
  )
}

export default App