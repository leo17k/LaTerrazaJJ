// tailwind.config.js

module.exports = {
  // ... otras configuraciones
  theme: {
    extend: {
      keyframes: {
        // Animación de entrada simple (Fade In)
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Animación de entrada con deslizamiento desde la izquierda
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px) skewX(-5deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) skewX(-5deg)' },
        },
        // Animación de entrada con deslizamiento desde la derecha
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        // Aplica la animación 'fadeIn' durante 0.5 segundos
        fadeIn: 'fadeIn 0.5s ease-out forwards', 
        // Aplica la animación 'slideInLeft' durante 0.6 segundos
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        // Aplica la animación 'slideInRight' durante 0.6 segundos
        slideInRight: 'slideInRight 0.6s ease-out forwards',
      },
    },
  },
  // ...
}