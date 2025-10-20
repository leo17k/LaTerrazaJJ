import React, { useState, useEffect } from 'react';
import {PIZZAS} from '../Data';

import './Assets/Pizza.css'; 




const Plato = ({ plato }) => {
    const { name, price, description } = plato; // Asume que 'description' podría ser string o array
    const [priceBS, setPriceBS] = useState(null);

    // *** LÓGICA DE CONVERSIÓN DE PRECIOS ***
    useEffect(() => {
        // En un entorno real, ejecutarías tu fetch aquí
        // fetch("https://ve.dolarapi.com/v1/dolares/oficial")
        // ... (tu lógica de fetch anterior) ...
        const tasaFija = 36.0; // Tasa ficticia USD a BS
        if (price) setPriceBS((tasaFija * price).toFixed(2));
    }, [price]); 
    // ***************************************

    return (
        <div className="flex  justify-between items-start border-b border-gray-200 py-3">
            <div className="w-4/5">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                {/* --- LÓGICA PARA LA DESCRIPCIÓN (string o array) --- */}
                <p className="text-sm text-gray-500 italic">
                    {
                        Array.isArray(description) 
                            ? description.join(', ') // Si es un array, únelo con comas
                            : description            // Si no, renderízalo directamente
                    }
                </p>
                {/* -------------------------------------------------- */}
            </div>
            <div className="w-1/5 text-right font-bold text-lg text-green-600">
                ${price.toFixed(2)}
                <p className="text-xs font-normal text-gray-500 mt-1">
                    Bs {priceBS === null ? '...' : priceBS}
                </p>
            </div>
        </div>
    );
};

const PizzasCategory = () => {
    return (
        // Contenedor principal: usa grid para las dos columnas
        <section  className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

            {/* COLUMNA IZQUIERDA: LISTA DEL MENÚ */}
            <div className="bg-white text-gray-600 p-6 sm:p-10 relative overflow-hidden">
                {/* Puedes añadir un z-index alto para las hojas de albahaca si son imágenes */}

                {/* Título Principal */}
                <header className="mb-8 relative z-10">
                    <h1 className="text-5xl font-impact uppercase text-yellow-500 leading-none">
                       ricas
                    </h1>
                    <h2 className="text-6xl font-impact uppercase menu-item-title leading-none">
                        PIZZA
                    </h2>
                </header>

                {/* Lista de Platos */}
                <div className="relative z-10 space-y-4">
                    {PIZZAS.map((pizza, index) => (
                        <Plato
                            key={pizza.name}
                            plato={{
                                name: pizza.name,
                                description: pizza.ingredients,
                                price: pizza.price,
                                priceClass: "text-orange-500" 
                            }}
                        />
                    ))}
                </div>


            </div>

            {/* COLUMNA DERECHA: SECCIÓN VISUAL (PIZZA) */}
            {/* Aplica la clase personalizada para el fondo y el texto "PIZZA" */}
            <div className="pizza-visual-bg bg-amber-50 flex justify-center items-center p-4">
                {/* Contenedor de la pizza para centrarla y darle un z-index */}
                <div className="relative z-10 w-full max-w-[80dvw] transform  scale-110">
                    {/* Placeholder para la imagen de la pizza */}
                    <div className="bg-cover bg-center rounded-full shadow-2xl overflow-hidden">
                        <img src="../public/IMG/Pizzaa.png" className="" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};


const PizzaBuilder = ({ PIZZAS = [] }) => {
    
    const [selectedIndex, setSelectedIndex] = useState(0); 
    
    const totalPizzas = PIZZAS.length;
    const angleStep = totalPizzas > 0 ? 360 / totalPizzas : 0; 

    // --- Dimensiones ---
    const containerSize = '60ch';
    // const containerH = '30ch' // No usado, se elimina
    const orbitRadius = '17ch'; 
    const elementSize = '20ch'; 
    // const ww = window.width; // No usado, se elimina
    const ruta = "../public/IMG/";

    // Lógica de Rotación Centralizada (Enfoque en 0 grados / Arriba)
    const containerRotation = -selectedIndex * angleStep; 

    const handlePizzaClick = (index) => {
        setSelectedIndex(index);
    };

    const selectedPizza = PIZZAS[selectedIndex];

    // Lógica de Rotación Automática (Intervalo)
    useEffect(() => {
        if (totalPizzas === 0) return;

        const setNextPizza = () => {
            setSelectedIndex(prevIndex => (prevIndex + 1) % totalPizzas);
        };
        
        // 1. Crear el intervalo.
        const intervaloID = setInterval(() => {
          
        }, 6000); // Rota cada 6 segundos.
        
        // 2. Limpieza: Se ejecuta cuando el componente se desmonta o las dependencias cambian.
        return () => {
            clearInterval(intervaloID);
            console.log("Intervalo limpiado.");
        };
    }, [totalPizzas]); // Depende de totalPizzas (que depende de PIZZAS)

    // Si PIZZAS es un array vacío, esto evita un crash al intentar acceder a PIZZAS[0]
    if (totalPizzas === 0) {
        return (
            <section id='PIZZAS' className='flex justify-center items-center h-[100dvh] bg-gray-50'>
                <p className='text-xl font-bold text-gray-500'>No hay pizzas disponibles para mostrar.</p>
            </section>
        );
    }

    return (
        <>
            <section id='PIZZAS' className='flex h-max flex-wrap md:flex-nowrap  relative justify-around items-center p-top-70 bg-gray-50 min-h-screen'>
            
              <img className='w-200px max-w-[80dvw] min-w-[200px] md:w-1/4' src={ruta + 'PizzaL.png'} alt="Ilustración de pizza grande" />

                {/* 2. COLUMNA CENTRAL: Ruleta y Detalles */}
                <div className='flex flex-col items-center justify-center max-w-[90dvw] min-w-[35ch]'>
                    
                    {/* Nombre y Precio (Arriba) */}
              

                    {/* Contenedor de la Ruleta (Dimensiones Fijas) */}
                    <div 
                        style={{ height: '30ch' , minWidth: '30ch', width:containerSize, maxWidth:'100dvw' }}
                        className={`
                            relative overflow-hidden rounded-2xl contenedor-con-degradado
                        `}
                    >
                        {/* Contenedor que rota */}
                        <div 
                            // 🔑 CLAVE AGREGADA: Key para estabilizar este contenedor si la lista cambia.
                            // Esto ayuda a React a rastrear este elemento principal de la lista.
                            key="pizza-carousel-container" 
                            style={{
                                transform: `rotate(${containerRotation}deg)`, 
                                transition: 'transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)', 
                                height: containerSize,
                                width: containerSize ,
                                minWidth: '35ch',
                        
                                maxWidth:'100dvw'
                            }} 
                            className={`relative rounded-full`}
                        >
                            
                            {/* Centro Visual */}
                            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] -translate-y-1/2  rounded-full shadow-lg'></div>

                            {PIZZAS.map((pizzaData, index) => {
                                const angle = angleStep * index; 
                                const straightenRotation = -containerRotation; 
                                const isSelected = index === selectedIndex;
                                
                                const transformStyle = {
                                    transform: `
                                        rotate(${angle}deg) 
                                        translateY(-${orbitRadius}) 
                                    `,
                                    top: '50%',
                                    left: '50%',
                                    transition: 'transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)', 
                                };

                                const pizzaElementStyle = {
                                    width: elementSize,
                                    height: elementSize,
                                    transform: `rotate(${straightenRotation}deg)`,
                                    transition: 'transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)',
                                    zIndex: isSelected ? 20 : 10, 
                                };
                                
                                return (
                                    <div 
                                        // ✅ CORRECCIÓN CLAVE: Usar un ID estable como 'name' en lugar de 'index'.
                                        // **IMPORTANTE**: Si 'name' no es único, debe usar un ID único de la base de datos.
                                        key={pizzaData.name || `pizza-${index}`} 
                                        className={`
                                            absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer 
                                            transition-all duration-300
                                        `}
                                        style={transformStyle}
                                        onClick={() => handlePizzaClick(index)} 
                                    >
                                        <div
                                            className={`
                                                rounded-full shadow-xl hover:shadow-2xl 
                                                flex items-center justify-center 
                                                ${isSelected ? 'opacity-100 ring-4 scale-120 ring-offset-2 ring-yellow-400 ' : 'opacity-70 scale-90'}
                                            `}
                                            style={pizzaElementStyle}
                                        >
                                            <img 
                                                src={ruta + pizzaData.baseImage} 
                                                alt={pizzaData.name || `Pizza ${index + 1}`} 
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Nombre (Debajo) */}
                       
                    <div className='text-center flex justify-center flex-col mt-6'>
                        <h1 className='text-4xl w-full text-center font-extrabold text-gray-900 ml-[5%]'>
                            {selectedPizza?.name || 'Selecciona una Pizza'}
                        </h1>
                        <p className='text-sm text-gray-500 mt-2'>{selectedPizza.ingredients.join(', ')}</p>
                    </div>
                       <div className='text-center mt-2 '>
                        <p className='text-2xl font-bold text-green-600'>
                           M: {selectedPizza.price.mediana}$ -
                           F: {selectedPizza.price.familiar}$ 
                        </p>
                    </div>
                </div>

                {/* 3. COLUMNA DERECHA: Selector de Pizzas */}
                <div className='w-[400px] md:w-1/4 min-w-[200px] max-w-[80dvw] p-4 sticky top-4'>
                    <h2 className='text-2xl h22 text-center font-extrabold text-orange-500 mb-4 pb-2'>Disponibles</h2>
                    <div className='flex flex-col space-y-2'>
                        {PIZZAS.map((pizza, index) => (
                            <button 
                                // ✅ CORRECCIÓN CLAVE: Usar un ID estable como 'name' en lugar de 'index'.
                                key={index} // Usa el nombre de la pizza para la clave.
                                onClick={() => handlePizzaClick(index)} 
                                className={`
                                    w-full px-4 py-2 rounded-lg text-left text-sm font-semibold transition-all duration-200
                                    ${index === selectedIndex 
                                        ? 'bg-indigo-600 text-white shadow-lg ring-2 ring-indigo-400' 
                                        : 'bg-gray-100 text-gray-800 hover:bg-indigo-50 hover:text-indigo-600'
                                    }
                                `}
                            >
                             
                                {pizza.name || `Pizza ${index + 1}`}
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export {PizzaBuilder, PizzasCategory};