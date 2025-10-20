import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.png'
import Nav from './Componentes/Nav'
import Dashboard from './Dashboard'
import Carta from './Carta'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Menu" element={<Carta />} />
      </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
