import { useEffect, useState } from "react";
import Autocomplete from "./Autocomplet"; // Componente no usado en el return actual, pero se mantiene
import Sidebar from "./Sidebar";

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('none');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY || document.documentElement.scrollTop;

            // Establece 'scrolled' si se mueve más de 1px del top
            setScrolled(currentScrollY > 1);

            // --- Lógica de Dirección de Scroll CORREGIDA ---
            if (currentScrollY > lastScrollY && currentScrollY > 100) { // Mayor a 100px para evitar 'flicker'
                setScrollDirection('down'); // Usamos minúscula
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection('up');
            } else if (currentScrollY === 0) {
                setScrollDirection('none');
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        console.log("Scrolled state changed:", scrolled, "Direction:", scrollDirection);
    }, [scrolled, scrollDirection]);

    // 💡 SOLUCIÓN CLAVE: Crear un objeto de estilo de React
    const navStyle = {
        // CORRECCIÓN de Capitalización: Se compara con "down" (minúscula)
        top: scrollDirection === "down" ? '-100px' : '0', 
    };

    return (
        // Aplicar el objeto de estilo y la clase sticky
        <div 
            className={`
                sticky top-0 left-0 blurr header 
                shadow-lg shadow-m transition-all duration-200 
                flex m-0 z-50 // Añadir un z-index alto para asegurar que esté encima
            `} 
            style={navStyle}
        >
            <div className="container flex justify-between items-center smt">
                <div className="flex gap-2 justify-center items-center">
                    <img src="../public/vite.png" alt="" className="h-20 object-contain" />
                </div>

                <div className="flex justify-center gap-8 a items-center px-10">
                    <a href="#HAMBURGUESAS">Hamburguesas</a>
                   <a href="#PIZZAS">Pizzas</a>
                   <a href="#POLLOS">Pollos</a>
                   <a href="#BEBIDAS">Bebidas</a>
                   <a href="#ANTOJOS">Antojos</a>
                   <a href="#SOPAS">Sopas</a>
                   <a href="#MENUDELDIA">Menu del Dia</a>
                    <a href="#PARRILLAS">Parrillas</a>
                   <a href="#COMBOS">Combos</a>
                </div>
                
                <Sidebar/>
            </div>
        </div>
    );
};

export default Nav;