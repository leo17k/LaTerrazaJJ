import { useState, useEffect } from "react";

const Plato = ({ plato }) => {
    const { name, price, description, image } = plato;

    return (
       <div className="flex w-[350px] max-w-[100dvw] gap-5 items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl  hover:bg-white/10 transition-colors">
       
            <div className="flex-shrink-0">
                <img 
                    className="w-[100px] h-[100px] rounded-full object-cover border-2 border-amber-100/30"
                    src={`/IMG/${image}`} 
                    alt={name}
                />
            </div>
            <div className="flex-grow">
                <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">{name}</h3>
                    <div className="px-3 py-1 bg-amber-900/60 text-white rounded-full font-semibold whitespace-nowrap">
                        ${price.toFixed(2)}
                    </div>
                </div>
                <div className="w-full h-px bg-amber-100/20 my-2"></div>
                <p className="text-gray-200">{description}</p>
            </div>
        </div>
    );
};
const MenudelDia = ({ MENUDELDIA = [] }) => {

    return (
        <>
            <section id="MENUDELDIA" className=" p-4 box-border m-0 flex flex-col  items-center ">

                <h2 className="text-4xl w-max font-extrabold text-center text-white mb-12 border-b-4 border-yellow-500 pb-2">
                    Menu del Dia
                </h2>

                <div className="flex flex-wrap  gap-10 justify-center ">
                    {MENUDELDIA.map((plato, index) => (
                        <Plato key={index} plato={plato} />
                    ))}
                </div>

            </section>
        </>
    )
}

export { Plato, MenudelDia }
