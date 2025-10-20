import React, { useState, useEffect, useCallback } from 'react';
import { BEBIDAS, POLLOS } from '../Data';

const Bebida = ({ bebida }) => {
    const { name, image, price } = bebida;

    return (
        // Aplicamos la animación principal de entrada a todo el contenedor de la bebida.
        // 'animate-fadeIn' será una clase CSS personalizada que definiremos.
        <div className='flex relative items-center z-1 animate-fadeIn'> 
            <div className='relative  h-[284px] md:h-[540px]'> 
                <img
                    // Aplicamos una animación de 'slide-in-right' a la imagen.
                    className='w-[200px] drop-shadow-2xl drop-shadow-black md:w-[300px] relative h-auto object-cover z-10 transition-opacity duration-500 animate-slideInRight'
                    src={`/IMG/${image}`}
                    alt={name} 
                />
            </div>
            <h2 className='text-[40px] leading-normal md:text-[55px] w-[200px] break-words md:w-[200px]
             font-impact font-semibold [transform:skewX(-5deg)] uppercase
             md:translate-x-[-90px] translate-x-[-50px] translate-y-[30px] md:translate-y-[70px] z-0 animate-slideInLeft'>
                 {/* Aplicamos una animación de 'slide-in-left' al texto. */}
                {name}
            </h2>
             <h2 className='text-[40px] leading-normal md:text-[55px] w-[200px] break-words md:w-[200px]
             font-impact font-semibold [transform:skewX(-5deg)] uppercase
             md:translate-x-[-90px] absolute top-1/2 text-green-500 left-[-50px] rotate-90 scale-[-100%] justify-end text-end translate-x-[-50px] translate-y-[30px] md:translate-y-[70px] z-0 animate-slideInLeft'>
                 {/* Aplicamos una animación de 'slide-in-left' al texto. */}
                {price}$
            </h2>
        </div>
    );
};




// PollosCategory.jsx o integrado

// PollosCategory.jsx o integrado

const BebidaCategory = ({ BEBIDAS }) => {

     const [indexBebida, setIndexBebida] = useState(1);
    const [prevIndex, setPrevIndex] = useState(0);


    // Precargar todas las imágenes cuando el componente se monte
    useEffect(() => {
        BEBIDAS.forEach(bebida => {
            const img = new Image();
            img.src = `/IMG/${bebida.image}`;
        });
    }, [BEBIDAS]);
    return (
        <section id='BEBIDAS' className="p-4 sm:p-10 bg-bebidas">
            <h2 className="text-4xl  font-impact uppercase text-white mb-10 text-center">
                Bebidas
            </h2>

            <div className='flex justify-center gap-10 flex-wrap '>

                <Bebida
                    key={BEBIDAS[indexBebida].name}
                    bebida={BEBIDAS[indexBebida]}
                      isActive={indexBebida}

                />
           <ul className='text-[20px] mt-20 md:mt-0 h-[284px] md:h-[440px] contenedor-con-scroll overflow-y-auto px-10 flex flex-col justify-start [transform:skewX(5deg)] ml-4 py-4'>
                    {BEBIDAS.map((bebida, index) => (
                        <li 
                            className={`cursor-pointer hover:scale-110 transition-all duration-200 py-2 px-4 rounded ${
                                index === indexBebida ? 'bg-white text-black' : 'text-white hover:bg-white/20'
                            }`}
                            onClick={() => setIndexBebida(index)} 
                            id={index}
                            key={index}
                        >
                            {bebida.name}
                        </li>
                    ))}
                </ul>
            </div>


        </section>
    );
};


export { BebidaCategory, Bebida }