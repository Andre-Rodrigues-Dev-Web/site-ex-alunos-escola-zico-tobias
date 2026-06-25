import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Fotos from './pages/Fotos'
import Videos from './pages/Videos'
import CausosExAlunos from './pages/CausosExAlunos'
import ApoieProjeto from './pages/ApoieProjeto'
import NostalgiaDetalhe from './pages/NostalgiaDetalhe'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destaques" element={<Navigate to="/" replace />} />
      <Route path="/fotos" element={<Fotos />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/causos-dos-alunos" element={<CausosExAlunos />} />
      <Route path="/apoie" element={<ApoieProjeto />} />
      <Route path="/nostalgia/:id" element={<NostalgiaDetalhe />} />
    </Routes>
  )
}

export default App
