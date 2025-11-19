import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Cart from './pages/Cart'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/artists" element={<Artists/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </HashRouter>
  )
}

export default App
