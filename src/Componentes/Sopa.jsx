import { useState, useEffect } from "react";

const Sopa = ({ SOPA}) => {
    const { name, price, description, image } = SOPA;

    return (<>
        <div className="flex flex-col w-[200px]  shadow-xl gap-2 shadow-gray-500/10 text-gray-200 bg-gray-900/30 backdrop-blur-lg p-4 rounded-2xl">
            <div className="flex items-center justify-center">
                <img className="w-[150px] drop-shadow-2xl drop-shadow-gray-950/20   h-auto" src={`/IMG/${image}`} alt="" />
            </div>

            <div className="flex flex-col items-center">
                <h3 className="text-xl text-center font-bold">{name}</h3>
                <p className="text-center">{description}</p>
                <p className="px-4 py-2 mt-2 font-bold text-amber-50 bg-amber-900/60 rounded-2xl">{price.toFixed(2)}$</p>

            </div>
        </div>


    </>)
}

const SopaCategoria = ({ SOPAS = [] }) => {


    if (SOPAS.length === 0) {
        console.log("No hay sopas")
    }
    return (
        <>
            <section id='SOPAS' className=" p-10 flex flex-col  items-center ">
              
                <h2 className="text-4xl w-max font-extrabold text-center text-white mb-12 border-b-4 border-yellow-500 pb-2">
                    Sopas
                </h2>

                <div className="flex p-10 flex-wrap gap-10 justify-center ">
  {SOPAS.map((sopa, index) => (
                    <Sopa key={index} SOPA={sopa} />
                ))}
                </div>
              
            </section>
        </>
    )
}

export { Sopa, SopaCategoria }