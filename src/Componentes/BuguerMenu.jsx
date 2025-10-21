import { useEffect, useState } from "react";
// 1. Datos de las Hamburguesas
const BURGERS = [
    {
        name: 'HAMBURGUESA DE POLLO',
        desc: 'Pechuga de pollo a la parrilla, aderezo especial, aguacate y cebolla caramelizada.',
        price: '$6.00',
        image: '/IMG/Pollo.png', // Reemplaza con la URL de la imagen real
    },
    {
        name: 'HAMBURGUESA DE CARNE',
        desc: 'Doble porción de carne premium, tocino crujiente, aros de cebolla y salsa BBQ.',
        price: '$5.00',
        image: '/IMG/Carne.png', // Reemplaza con la URL de la imagen real
    },
    {
        name: 'HAMBURGUESA MIXTA',
        desc: 'Una explosión de sabor con carne de res, pollo crispy y queso cheddar ',
        price: '$7.50',
        image: '/IMG/Mixta.png', // Reemplaza con la URL de la imagen real
    },
];
const BurguerMenu = () => {
    // 2. Estado para la Hamburguesa Activa (índice 0, 1, 2 o 3)
    const [currentBurgerIndex, setCurrentBurgerIndex] = useState(0);
    const currentBurger = BURGERS[currentBurgerIndex];
    const totalBurgers = BURGERS.length;

    // 3. Función para Navegar
    const navigate = (direction) => {
        let newIndex = currentBurgerIndex + direction;

        // Manejo del ciclo (si llegamos al final, volvemos al inicio, y viceversa)
        if (newIndex < 0) {
            newIndex = totalBurgers - 1; // Volver al final
        } else if (newIndex >= totalBurgers) {
            newIndex = 0; // Volver al inicio
        }

        setCurrentBurgerIndex(newIndex);
    };
    useEffect(() => {
        // 1. Crear el intervalo.
        const intervaloID = setInterval(() => {
            navigate(1);
            console.log("Avanzando automáticamente.");
        }, 4000); // Se ejecuta cada 4 segundos (4000 ms)

        // 2. Función de limpieza.
        // Se ejecuta cuando el componente se desmonta (destruye) 
        // o antes de que se ejecute un nuevo efecto.
        return () => {
            clearInterval(intervaloID);
            console.log("Intervalo limpiado.");
        };
    }, [navigate]);

    return (
        <section id="HAMBURGUESAS" className="bg-black text-white h-max py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row   relative">



            {/* Contenedor de Contenido (Izquierda) */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 p-4  z-10">
                <h2 className="h2 text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 uppercase leading-tight">
                    {currentBurger.name}
                </h2>
                <p className="text-base md:text-lg text-gray-300 max-w-md mb-8">
                    {currentBurger.desc}
                </p>

                <div className="flex space-x-4 mb-8">
                    <a 
                        href={`https://wa.me/584128746822?text=Hola, quiero una ${encodeURIComponent(BURGERS[currentBurgerIndex].name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block text-center"
                    >
                        PEDIR
                    </a>
                   
                </div>

                {/* Indicadores de diapositivas (puntos) */}
                <div className="flex justify-around static w-full md:w-4/10 items-center space-x-2 mt-4 md:mt-8">
                    {/* Flecha Izquierda */}
                    <div
                        onClick={() => navigate(1)} // Retrocede -1
                        className="absolute left-4 md:left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 hidden md:block flechas"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>

                    </div>
                    <div className="flex items-center space-x-2">
                        {BURGERS.map((_, index) => (
                            <span
                                key={index}
                                onClick={() => setCurrentBurgerIndex(index)} // Cambia directamente al hacer click
                                className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${index === currentBurgerIndex ? 'bg-orange-600' : 'bg-gray-600'
                                    }`}
                            ></span>
                        ))}
                    </div>

                    {/* Flecha Derecha */}
                    <div
                        onClick={() => navigate(1)} // Avanza +1
                        className="absolute flechas right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer p-2 rounded-full hover:bg-gray-800 transition-colors duration-300 hidden md:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Contenedor de la Imagen (Derecha) */}
            <div className="relative md:w-1/2   h-full mt-8 md:mt-0 p-4 flex justify-center items-center z-10">
                {/* Precio flotante */}
                <div className="absolute top-0 right-0 md:top-10 md:right-10 bg-orange-600 text-white text-2xl font-bold p-3 px-6 rounded-full shadow-lg transform -translate-y-1/2 md:translate-y-0 z-20">
                    {currentBurger.price}
                </div>

                {/* Imagen de la hamburguesa */}
                <img
                    src={currentBurger.image}
                    alt={currentBurger.name}
                    className="w-6/10 h-auto aspect-square object-containt transition-opacity duration-500"
                />

            </div>


        </section>


    )
}


export default BurguerMenu
