
const ComboCard = ({ combo }) => {
    // Asegurarse de que combo y combo.platos existan
    if (!combo) return null;
    
    // Si no hay platos, no renderizar el componente
    if (!combo.platos || !Array.isArray(combo.platos)) {
        console.warn('Combo sin platos válidos:', combo);
        return null;
    }

    return (
           <div className="flex w-full  gap-5 items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl  hover:bg-white/10 transition-colors">
            <div className="p-2 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{combo.name || 'Combo sin nombre'}</h3>
                    {typeof combo.price === 'number' && (
                        <span className="px-4 py-1 bg-amber-500 text-white rounded-full font-bold text-lg shadow-md">
                            ${combo.price.toFixed(2)}
                        </span>
                    )}
                </div>
                
                <div className="mb-4 flex-1">
                    <h4 className="text-sm font-semibold text-amber-600 mb-2 uppercase tracking-wider">Incluye:</h4>
                    <ul className="space-y-2 max-w-[100%]">
                        {combo.platos.map((plato, index) => (
                            <li key={`${combo.name}-${index}`} className="flex  items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span className="text-gray-200">{plato}</span>
                            </li>
                        ))}
                    </ul>
                    <a 
                        href={`https://wa.me/584128589365?text=Hola, quiero el ${encodeURIComponent(combo.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 text-sm w-full text-center"
                    >
                        PEDIR AHORA
                    </a>
                </div>
            </div>
        </div>
    );
};

const Combos = ({ COMBOS = [] }) => {
    // Depuración: Ver cuántos combos están llegando
    console.log('Número total de combos recibidos:', COMBOS.length);
    
    // Verificar que COMBOS sea un array antes de mapear
    if (!Array.isArray(COMBOS) || COMBOS.length === 0) {
        return (
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-200">No hay combos disponibles en este momento</h2>
                </div>
            </section>
        );
    }
    return (
        <section id="COMBOS" className="py-5 bg-sopas   bg-white">
            <div className=" mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">Nuestros Combos Especiales</h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
                    <p className="mt-4 text-gray-200 max-w-xl mx-auto">
                        Disfruta de nuestras deliciosas combinaciones preparadas especialmente para ti
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4">
                    {COMBOS.map((combo, index) => {
                        // Asegurarse de que el combo tenga un ID único o usar el índice como último recurso
                        const comboKey = combo.id || `combo-${index}`;
                        return (
                            <ComboCard 
                                key={comboKey} 
                                combo={combo} 
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Combos;
