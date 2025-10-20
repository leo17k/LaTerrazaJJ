import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Función para ocultar la pantalla de carga
const hideLoadingScreen = () => {
  const root = document.getElementById('root')
  const loadingScreen = document.getElementById('loading-screen')
  
  if (root && loadingScreen) {
    root.classList.add('loaded')
    // Esperar a que termine la transición para remover el elemento del DOM
    setTimeout(() => {
      loadingScreen.style.display = 'none'
    }, 500) // Debe coincidir con la duración de la transición (0.5s)
  }
}

// Crear la raíz de la aplicación
const root = createRoot(document.getElementById('root'))

// Renderizar la aplicación
root.render(
  <StrictMode>
    <App onLoad={hideLoadingScreen} />
  </StrictMode>
)

// Ocultar la pantalla de carga cuando se cargue la página
window.addEventListener('load', hideLoadingScreen)

// En caso de que la página ya esté cargada
if (document.readyState === 'complete') {
  hideLoadingScreen()
}
