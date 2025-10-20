import React, { useState, useEffect } from 'react';
import {POLLOS} from '../Data';
// Recibe el plato y el índice de su posición
const ChickenPlatoCard = ({ plato, index }) => {
    const { name, price, description, weight, image, style, portions } = plato;
     const [porcionSeleccionada, setPorcionSeleccionada] = useState(portions[0]);
    const [precioBS, setPrecioBS] = useState(null);
    
       useEffect(() => {
        // Factor de conversión fijo para el ejemplo
        const tasaFija = 36.0;
        const factorConversion = 7.0;
        setPrecioBS((tasaFija * porcionSeleccionada.price * factorConversion).toFixed(2));
    }, [porcionSeleccionada]);




    const isOdd = index % 2 !== 0;

   
    const rowDirection = isOdd ? 'flex-row-reverse' : 'flex-row';

    return (
        // Contenedor principal: Usamos flex para la disposición horizontal
        <div
            className={`relative ${style} h-max] rounded-[30px] p-2 flex items-center shadow-2xl my-8 max-w-xl mx-auto overflow-hidden transition-all duration-300 hover:shadow-red-800/50 ${rowDirection}`}
        >

            {/* 1. SECCIÓN DE TEXTO (Nombre, Precio) */}
            {/* La flexibilidad del div garantiza que ocupe el espacio restante */}
            <div className="flex-1 flex flex-col p-4 sm:p-8 z-10 items-start">
             

                 <h3 className="text-2xl w-[150px] font-black  uppercase text-gray-900 leading-none  text-nowrap text-left">
    {name}
</h3>
                   
                <p className="text-sm text-gray-600 mt-1 mb-3">
                    {description}
                </p>


                                <div className="flex  flex-wrap w-[200px] gap-2 mb-4 ">
                    {portions.map((porcion) => (
                        <button
                            key={porcion.size}
                            onClick={() => setPorcionSeleccionada(porcion)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                porcionSeleccionada.size === porcion.size
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {porcion.size}
                        </button>
                    ))}
                </div>


                {/* Contenedor del Precio Grande */}
                <div className="flex space-x-1 mt-2 font-impact">

                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[60%] text-nowrap text-gray-600">Por tan solo</span>
                        <span className="text-[100%] text-red-600">USD$</span>
                    </div>

                    <div className="flex items-center">
                        <span className="text-6xl h2 text-red-600 leading-none">{Math.floor(porcionSeleccionada.price)}</span>
                        <span className="text-3xl  text-red-600 leading-none">
                           
                             ,{((porcionSeleccionada.price % 1) * 100).toFixed(0).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                 
               
                {/* Peso y Precio en BS */}
                <p className="text-sm text-gray-500 mt-1 flex justify-between">
                    <span className=" text-xs">
                          • {porcionSeleccionada.weight} 
                    </span>
                </p>
            </div>

            {/* 2. SECCIÓN DE IMAGEN */}
            {/* Ocupa 1/3 del espacio de la tarjeta */}
            <div
                className="w-[50ch] flex m-auto p-0 h-full"


            >
                <img src={`/IMG/${image}`} className={`object-contain  w-full  h-auto scale-190  ${isOdd ?'translate-x-[-20%]': 'translate-x-[20%]'}  md:scale-150`} alt="" />
            </div>

        </div>
    );
};




// PollosCategory.jsx o integrado

// PollosCategory.jsx o integrado

const PollosCategory = ({ POLLOS }) => {
    return (
        <section id='POLLOS' className="p-4 sm:p-10 bg-red-600">
            <h2 className="text-4xl  font-impact uppercase text-white mb-10 text-center">
                 Pollos
            </h2>

            <div className="space-y-4">
                {/* PASAMOS EL ÍNDICE AL COMPONENTE HIJO */}
                {POLLOS.map((plato, index) => (
                    <ChickenPlatoCard
                        key={plato.name}
                        plato={plato}
                        index={index} // 👈 ¡CLAVE!
                    />
                ))}
            </div>
        </section>
    );
};


export {PollosCategory, ChickenPlatoCard}