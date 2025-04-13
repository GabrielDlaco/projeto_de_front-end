import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.jsx'
import ExercicioUm from './components/ExercicioUm.jsx'
import Exemplo from './components/Exemplo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exemplo />
  </StrictMode>,
)
