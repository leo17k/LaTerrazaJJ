import { useRef, useEffect, useState } from "react";

function Luces ({ descripcion, chart, themeKey }) {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);


  // El color de fondo de los ticks se obtiene dinámicamente en cada render de la gráfica
  function getColorFondo() {
    const rootStyles = getComputedStyle(document.documentElement);
    return rootStyles.getPropertyValue('--color-fondo').trim() || '#fff';
  }

  useEffect(() => {
    if (canvasRef.current && chart) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: chart.tipo,
        data: chart.datos,
        options: {
          responsive: true,
          plugins: {
            legend: { display: true },
            title: { display: false }
          },
          scales: {
            r: {
              angleLines: {
                color: '#808080', 
                lineWidth: 1
              },
              grid: {
                color: '#808080', 
                lineWidth: 1
              },
              pointLabels: {
                color: '#808080' 
              },
              ticks: {
                color: '#808080', 
                backdropColor: 'rgb(237, 204, 202,0.0)',
                backdropPaddingX: 2,
                backdropPaddingY: 2
              }
            }
          }
        }
      });
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [chart, themeKey]); // themeKey fuerza el re-render

  return (
    <>
      <canvas ref={canvasRef} className="w-full max-w-[600px] mx-auto mt-4 z-[-1]" height={300}></canvas>
    </>
  );
}

export default Luces