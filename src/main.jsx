import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import './App.css'
import App from './App.jsx'
import { Cartorio } from './pages/Cartorio'
import { Casamento } from './pages/Casamento'
import { Contato } from './pages/Contato'
import { Custas } from './pages/Custas'
import { Duvidas } from './pages/Duvidas'
import { SegundaVia } from './pages/SegundaVia'
import { Ficha } from './pages/Ficha'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/servicos/casamento-civil" element={<Casamento />} />
        <Route path="/servicos/:slug" element={<Ficha />} />
        <Route path="/o-cartorio" element={<Cartorio />} />
        <Route path="/tabela-de-custas" element={<Custas />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/segunda-via" element={<SegundaVia />} />
        <Route path="/fale-conosco" element={<Navigate to="/contato" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
