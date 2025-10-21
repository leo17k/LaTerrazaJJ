import React, { useState, useEffect, useCallback } from 'react';
import { BEBIDAS, POLLOS } from '../Data';

const Bebida = ({ bebida }) => {
    const { name, image, price } = bebida;

    return (
        // Aplicamos la animación principal de entrada a todo el contenedor de la bebida.
        // 'animate-fadeIn' será una clase CSS personalizada que definiremos.
        <div className='flex items-center gap-4 md:gap-8 p-4 animate-fadeIn'>
            <div className='relative w-[100px] h-[200px] md:w-[150px] md:h-[300px] flex-shrink-0'>
                <img
                    className='w-full h-full object-contain drop-shadow-2xl'
                    src={`/IMG/${image}`}
                    alt={name}
                    loading='lazy'
                />
            </div>
            
            <div className='flex flex-col'>
                <h2 className='text-3xl md:text-5xl font-impact font-semibold text-white [transform:skewX(-15deg)] break-words w-[200px] md:w-max'>
                    {name}
                </h2>
                {price && (
                    <span className='text-2xl md:text-3xl font-bold text-yellow-400 [transform:skewX(-15deg)]'>
                        ${price.toFixed(2)}
                    </span>
                )}
            </div>
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

            <div className='flex justify-center  flex-wrap '>

                <Bebida
                    key={BEBIDAS[indexBebida].name}
                    bebida={BEBIDAS[indexBebida]}
                      isActive={indexBebida}

                />
           <ul className='text-[20px] mt-20 md:mt-0 h-[284px] md:h-[440px] contenedor-con-scroll overflow-y-auto px-10 flex flex-col justify-start [transform:skewX(5deg)] ml-4 py-4'>
                    {BEBIDAS.map((bebida, index) => (
                        <li 
                            className={`cursor-pointer text-shadow-2xs hover:scale-110 transition-all duration-200 py-2 px-4 rounded ${
                                index === indexBebida ? 'bg-white text-black' : 'text-white hover:bg-white/20'
                            }`}
                            onClick={() => setIndexBebida(index)} 
                            id={index}
                            key={index}
                        >
                            {bebida.name} <span className=' leading-normal w-[200px] break-words md:w-[200px]
             font-impact font-semibold [transform:skewX(-5deg)] uppercase
              text-green-500'>${bebida.price}$</span>
                        </li>
                    ))}
                </ul>
            </div>


        </section>
    );
};


export { BebidaCategory, Bebida }