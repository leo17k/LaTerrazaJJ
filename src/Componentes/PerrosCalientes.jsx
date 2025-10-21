import React from 'react';

const PerroCaliente = ({ antojo }) => {
    const { name, price, description, image } = antojo;

    return (
         <div className="flex w-[350px] max-w-[100dvw] gap-5 items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl  hover:bg-white/10 transition-colors">
            {image && (
                <div className="flex-shrink-0">
                    <img 
                        className="w-[100px] h-[100px] rounded-full object-cover border-2 border-amber-100/30"
                        src={`/IMG/${image}`} 
                        alt={name}
                    />
                </div>
            )}
            <div className="flex-grow">
                <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold break-words text-white">{name}</h3>
                    <div className="px-3  py-1 bg-amber-900/60 text-white rounded-full font-semibold whitespace-nowrap">
                        ${price.toFixed(2)}
                    </div>
                </div>
                <div className="w-full h-px bg-amber-100/20 my-2"></div>
                <p className="text-gray-200">{description}</p>
            </div>
        </div>
    );
};

const PerrosCalientesCategory = ({ ANTOJOS = []}) => {
    return (
        <section id='ANTOJOS' className="min-h-screen bg-parrillas py-12 px-4 bg-gradient-to-br from-gray-900 to-red-950">
            <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl w-max font-extrabold text-center text-white mb-12 border-b-4 border-yellow-500 pb-2">
              
                    Nuestros Antojos
                </h2>
                
                
                    <div className="mb-12">
                     
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {ANTOJOS.map((antojo, index) => (
                                <PerroCaliente antojo={antojo} />
                            ))}
                        </div>
                    </div>
           
            </div>
        </section>
    );
};

export default PerrosCalientesCategory;
