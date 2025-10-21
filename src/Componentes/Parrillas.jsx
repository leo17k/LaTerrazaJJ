import { useEffect, useState } from "react";
import { PARRILLAS } from "../Data";


const Parrilla = ({parrilla}) => {
    return (
        <div className="flex w-[350px] max-w-[100dvw] gap-5 items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl  hover:bg-white/10 transition-colors">
            {parrilla.image && (
                <div className="flex-shrink-0">
                    <img 
                        className="w-[80px] h-[80px] rounded-full object-cover border-2 border-amber-100/30"
                        src={`/IMG/${parrilla.image}`} 
                        alt={parrilla.name}
                    />
                </div>
            )}
            <div className="flex-grow">
                <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold break-words text-white">{parrilla.name}</h3>
                    <div className="px-3  py-1 bg-amber-900/60 text-white rounded-full font-semibold whitespace-nowrap">
                        ${parrilla.price.toFixed(2)}
                    </div>
                </div>
                <div className="w-full h-px bg-amber-100/20 my-2"></div>
                <p className="text-gray-200 mb-3">{parrilla.description}</p>
                <a 
                    href={`https://wa.me/584128589365?text=Hola, quiero la parrilla: ${encodeURIComponent(parrilla.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 text-sm w-full text-center"
                >
                    PEDIR AHORA
                </a>
            </div>
        </div>
    );
};


const ParrillaCategory = ({PARRILLAS = []}) => {
    return (
        <section id="PARRILLAS" className="h-max bg-parrillas p-6 flex flex-col items-start bg-gradient-to-br from-gray-900 to-amber-950">
            <h2 className="text-4xl   font-extrabold text-center text-white mb-12 border-b-4 border-yellow-500 pb-2">
                Nuestras Parrillas
            </h2>
            
            <div className="flex-1 justify-start max-w-[90dvw] pr-2 w-4xl ">
                <div className="space-y-4 flex flex-wrap gap-2">
                    {PARRILLAS.map((parrilla) => (
                        <Parrilla key={parrilla.id} parrilla={parrilla} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ParrillaCategory;