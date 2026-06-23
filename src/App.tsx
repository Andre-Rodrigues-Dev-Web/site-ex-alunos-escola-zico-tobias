import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Destaques from './pages/Destaques'
import Fotos from './pages/Fotos'
import Videos from './pages/Videos'
import CausosExAlunos from './pages/CausosExAlunos'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destaques" element={<Destaques />} />
      <Route path="/fotos" element={<Fotos />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/causos-dos-alunos" element={<CausosExAlunos />} />
    </Routes>
  )
}

export default App
