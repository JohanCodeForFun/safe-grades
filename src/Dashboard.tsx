import { useState } from 'react'
import './styles/App.css'

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleVM = () => {
    setIsToggled(!isToggled);
  }
  return (
    <>
      <h1>Dashboard</h1>
      <div>
      <button onClick={handleToggleVM}>
        {isToggled ? 'Shutdown VM' : 'Launch VM'}
        </button>
        {isToggled && <div>Virtual machine is on.</div>}
      </div>
      <div className="split-screen">
        <div className="left">
          hello
        </div>
        <div className="right">
          world
        </div>
      </div>
    </>
  )
}

export default App