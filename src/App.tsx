import { BrowserRouter, Routes, Route } from 'react-router'
import './styles/App.css'
import Home from './Home.tsx'
import Login from './Login.tsx'
import Dashboard from './Dashboard.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App