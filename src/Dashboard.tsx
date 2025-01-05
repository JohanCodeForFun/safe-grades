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
        <h1>WebRTC</h1>
        <a href="https://webrtc.org">link to webrtc website</a>
        <br />
        <a href="https://webrtc.github.io/samples/src/content/peerconnection/multiple-relay/">link to webrtc example</a>
        <div className={isToggled ? 'right' : 'hidden'}>
          <Canvas height={240} width={320} />
        </div>
      </div>
    </div>
  )
}

export default App