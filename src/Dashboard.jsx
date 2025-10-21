import { useState, useEffect, useRef } from "react";
import BurguerMenu from "./Componentes/BuguerMenu";
import { PizzaBuilder, PizzasCategory } from "./Componentes/Pizzas";
import { PollosCategory, ChickenPlatoCard } from "./Componentes/Pollos";
import { Sopa, SopaCategoria } from "./Componentes/Sopa";
import { MenudelDia, Plato } from "./Componentes/MenuDelDia";
import { BebidaCategory, Bebida } from "./Componentes/Bebidas";
import ParrillaCategory from "./Componentes/Parrillas";
import CachapaCategory from './Componentes/Cachapas';
import PerrosCalientesCategory from './Componentes/PerrosCalientes';
import Combos from "./Componentes/Combos";

import {
    OTHER_DISHES,
    PIZZAS,
    CACHAPAS,
    ANTOJOS,
    POLLOS,
    SOPAS,
    MENUDELDIA,
    COMBOS,
    BEBIDAS,
    PARRILLAS,
} from "./Data";


const OtherCategoriesSection = ({ categories }) => {
    return (
        <section className="p-8 bg-gray-50">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12 border-b-4 border-yellow-500 pb-2">
                Nuestros Platos
            </h1>

            {/* Diseño de Grid Responsivo: 1 columna en móvil, 2 columnas en desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-6xl mx-auto">
                {categories.map((categoryData, index) => (
                    // Contenedor de cada Categoría
                    <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">

                        {/* Título de la Categoría */}
                        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-6 border-b border-gray-200 pb-3 uppercase tracking-wider">
                            {categoryData.category}
                        </h2>

                        {/* Listado de Platos */}
                        <div className="space-y-4">
                            {categoryData.items.map((plato, itemIndex) => (
                                <Plato
                                    key={itemIndex}
                                    plato={{
                                        name: plato.name,
                                        description: plato.description,
                                        price: plato.price,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};





const Ingredientes = ({ ingredientes }) => {

    return (
        <>
            <h3><strong>Ingredientes:</strong></h3>
            <ul>
                {ingredientes.map((ingrediente, index) => (

                    <li key={index}>{ingrediente}</li>
                ))}
            </ul>
        </>
    );
}






const PlatoCOMBO = ({ platos }) => {
    return (
        <>
            <h3><strong>Trae:</strong></h3>
            <ul >
                {platos.map((plato, index) => (

                    <li key={index}>{plato}</li>
                ))}

            </ul>
        </>

    )
}
const Plato2 = ({ Nombre, precio, imgurl, ingredientes }) => {
    const [isOpen, setIsOpen] = useState(false);

    const bri = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex flex-col gap-1 relative interpolar w-[60ch] max-w-[90dvw] bg-blue-950/10 py-4 px-8 rounded-2xl">
            <span>{Nombre}</span> <strong className="text-orange-400">{precio}</strong>
            <img className="h-1/1 w-1/2 aspect-video absolute top-0 right-0 rounded-br-2xl rounded-tr-2xl posicion " src={`../public/IMG/${imgurl}`} alt={Nombre} />

            {/* THIS is the wrapper for the transition */}
            <div className={`ingredients-wrapper ${isOpen ? 'open' : ''}`}>
                <Ingredientes ingredientes={ingredientes} />
            </div>


            <button onClick={bri} className="absolute bottom-5 right-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpen ? 'rotate-180' : "rotate-0"} transition-transform duration-300`} width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 11l8 3l8 -3" /></svg>
            </button>
        </div>
    )
}

const Combo = ({ Nombre, platos }) => {
    const [isOpen, setIsOpen] = useState(false);

    const bri = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="flex flex-col gap-1 relative transition-all duration-75 w-[60ch] max-w-[90dvw] bg-blue-950/10 py-4 px-8 rounded-2xl">
            <div className="flex justify-between"><span className="text-xl">{Nombre}</span> <strong>20.92$</strong> </div>
            <img className="h-1/1 w-1/2 aspect-video absolute top-0 right-0 rounded-br-2xl rounded-tr-2xl posicion "
                src="../public/IMG/Gemini_Generated_Image_wnl2jhwnl2jhwnl2.png" alt="" />


            <PlatoCOMBO Nombre="Combo 21" platos={platos} />
        </div>
    )
}
function Dashboard() {
    useEffect(() => {
        console.log('PARRILLAS actualizado:', PARRILLAS);
    }, [PARRILLAS]);

    return (
        <>
            <div className="container flex   smt  justify-between flex-wrap">

                <div className="content mt-20 smww  max-w-[500px]  ">

                    <h1 className="text-[50px] ">La<br /> gastronomía<br /> se redefine con cada bocado</h1>
                    <p>Sumérgete en una experiencia gastronómica sin igual, donde cada plato es una obra maestra de sabor, elaborado con cuidado y precisión, a partir de los ingredientes más frescos</p>
                </div>
                <div className="relative smw mx-20">
                    <div className="visor-img mt-5 ">
                        <img
                            className="imgPD "
                            src="/IMG/Diseño_sin_título-removebg-preview.png"
                            alt="" />
                    </div>

                </div>
            </div>
            <section className="bg-gray-950 h-[65dvh] flex  flex-col items-center  w-[100dvw] py-10">

                <h2 className="text-4xl text-center mb-8 text-orange-400">Visitanos</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1974.9769501324497!2d-63.558296311273736!3d8.10617668408202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dce87958bd334ff%3A0xacf5fbd9c64ca791!2sAbasto%20Y%20Carnicer%C3%ADa%20M%C3%AD%20Llanura%20JJ.!5e0!3m2!1ses-419!2sve!4v1760174501232!5m2!1ses-419!2sve"
                    // Limita las acciones del contenido incrustado
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    title="Contenido externo"
                    // Otros atributos necesarios
                    width="100%"
                    height="400"
                />
            </section>

            <BurguerMenu />

            <PizzaBuilder PIZZAS={PIZZAS} />

            <PollosCategory POLLOS={POLLOS} />

            <BebidaCategory BEBIDAS={BEBIDAS} />
           <PerrosCalientesCategory ANTOJOS={ANTOJOS} />

            <CachapaCategory CACHAPAS={CACHAPAS} />
            <section className="bg-sopas">
                <SopaCategoria SOPAS={SOPAS} />
                <MenudelDia MENUDELDIA={MENUDELDIA} />

            </section>
            <ParrillaCategory PARRILLAS={PARRILLAS} />
<Combos COMBOS={COMBOS}/>

        </>
    )
}

console.log('PARRILAS en Dashboard:', PARRILLAS);
export default Dashboard
export { Plato }