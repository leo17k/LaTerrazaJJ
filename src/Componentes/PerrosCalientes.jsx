import React from 'react';

const PerroCaliente = ({ antojo }) => {
    const { name, price, description, image } = antojo;

    return (
        <div className="flex flex-col w-full max-w-[500px] gap-4 items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors">
            <div className="flex-grow w-full">
                <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-yellow-500 pb-2 inline-block">{name}</h3>
                    <div className="px-3 py-1 bg-yellow-600 text-white rounded-full font-semibold whitespace-nowrap">
                        ${price.toFixed(2)}
                    </div>
                </div>
                {description && (
                    <>
               
                        <p className="text-gray-200 text-sm">{description}</p>
                    </>
                )}
            </div>
            {image && (
                <img src={`/IMG/${image}`} alt={name} className="w-full h-auto object-cover rounded-b-2xl" />
            )}
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
