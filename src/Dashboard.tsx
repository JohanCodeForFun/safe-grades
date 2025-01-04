import { useState } from 'react'
import './styles/Dashboard.css'
import Canvas from './components/Canvas';

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
          <Canvas height={240} width={320} />
        </div>
      </div>
    </div>
  )
}

export default App