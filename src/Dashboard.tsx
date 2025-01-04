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
        {isToggled ? <p>Virtual machine is on.</p> : <p>Start a virtual machine...</p>}
      </div>
      <div>
        <div className={isToggled ? 'right' : 'hidden'}>
          world
        </div>
      </div>
    </div>
  )
}

export default App