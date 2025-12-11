import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Cart from './pages/Cart'
import Schedule from './pages/Schedule'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/artists" element={<Artists/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/schedule" element={<Schedule/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
