import React, { useState, useEffect, useCallback } from 'react';
import { BEBIDAS } from '../Data';

const Bebida = ({ bebida, isActive }) => {
    const { name, image } = bebida;
    const [isLoaded, setIsLoaded] = useState(false);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (isActive) {
            setOpacity(0);
            const img = new Image();
            img.src = `../public/IMG/${image}`;
            img.onload = () => {
                setIsLoaded(true);
                setOpacity(1);
            };
            return () => {
                img.onload = null;
            };
        }
    }, [image, isActive]);

    if (!isActive) return null;

    return (
        <div className='flex items-center z-1 relative'>
            <div className='relative h-[274px] md:h-[400px]'>
                <img
                    className={`w-[200px] md:w-[300px] h-auto object-cover z-10 transition-opacity duration-300`}
                    src={`../public/IMG/${image}`}
                    alt={name}
                    style={{ opacity }}
                />
                {!isLoaded && (
                    <div className='absolute inset-0 bg-gray-200 animate-pulse w-[200px] md:w-[300px] h-full'></div>
                )}
            </div>
            <h2 className='text-[50px] md:text-[70px] w-[200px] md:w-[300px]
                font-impact font-semibold [transform:skewX(-5deg)] 
                md:translate-x-[-105px] translate-x-[-55px] translate-y-[30px] md:translate-y-[80px] z-0
                transition-all duration-300 ease-in-out'>
                {name}
            </h2>
        </div>
    );
};

const BebidaCategory = ({ BEBIDAS }) => {
    const [indexBebida, setIndexBebida] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    const handleBebidaChange = useCallback((index) => {
        setPrevIndex(indexBebida);
        setIndexBebida(index);
    }, [indexBebida]);

    // Precargar todas las imágenes cuando el componente se monte
    useEffect(() => {
        BEBIDAS.forEach(bebida => {
            const img = new Image();
            img.src = `../public/IMG/${bebida.image}`;
        });
    }, [BEBIDAS]);

    return (
        <section className="p-4 sm:p-10 bg-bebidas">
            <h2 className="text-4xl font-impact uppercase text-white mb-10 text-center">
                Bebidas
            </h2>

            <div className='flex'>
                <div className='relative  w-[200px] md:w-[300px] h-[274px] md:h-[400px]'>
                    {BEBIDAS.map((bebida, index) => (
                        <Bebida
                            key={bebida.name}
                            bebida={bebida}
                            isActive={index === indexBebida}
                        />
                    ))}
                </div>
                
                <ul className='text-[20px] flex flex-col justify-center [transform:skewX(5deg)] ml-4'>
                    {BEBIDAS.map((bebida, index) => (
                        <li 
                            className={`cursor-pointer hover:scale-110 transition-all duration-200 py-2 px-4 rounded ${
                                index === indexBebida ? 'bg-white text-black' : 'text-white hover:bg-white/20'
                            }`}
                            onClick={() => handleBebidaChange(index)} 
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

export { BebidaCategory, Bebida };