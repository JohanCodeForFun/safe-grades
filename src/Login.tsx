import './styles/App.css'
import { NavLink } from 'react-router'

function App() {
  return (
    <>
      <h1>Login</h1>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
    </>
  )
}

export default App