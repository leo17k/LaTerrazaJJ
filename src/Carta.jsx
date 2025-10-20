import { useState, useEffect } from "react";

const PIZZAS = [
    {
        name: 'Margarita Clásica',
        baseImage: 'pizzaa.png', // Base de pizza de queso
        ingredients: ['Queso Mozzarella', 'Pasta de Tomate', 'Albahaca Fresca'],
        price: 6,

    },

    {
        name: 'Pepperoni Fiesta',
        baseImage: 'pizzaa.png', // Base de pizza de queso
        ingredients: ['Queso Mozzarella', 'Pasta de Tomate', 'Pepperoni Picante'],
        price: 6.2
    },
    {
        name: 'Vegetariana Fresca',
        baseImage: 'pizzaa.png', // Base de pizza de queso
        ingredients: ['Queso Mozzarella', 'Pasta de Tomate', 'Pimientos', 'Cebolla', 'Aceitunas', 'Champiñones'],
        price: 7

    },
    {
        name: 'Hawaiana Tropical',
        baseImage: 'pizzaa.png', // Base de pizza de queso
        ingredients: ['Queso Mozzarella', 'Pasta de Tomate', 'Jamón Cocido', 'Piña'],
        price: 7.99
    },
];

const POLLOS = [
    {
        name: 'Broaster',
        description: 'Com Maionese Especial',
        price: 39.90, // R$
        weight: '500g de frango',
        image: 'Broster.png', // Placeholder
        style: 'bg-white',
    },
    {
        name: 'Asado',
        description: 'Com Creme Especial',
        price: 18.90, // R$
        weight: '250g de frango',
        image: 'Asado.png', // Placeholder
        style: 'bg-white',
    },
  
    {
        name: 'ALITAS BBQ', // Plato adicional
        description: 'Asadas a la perfección con salsa BBQ ahumada.',
        price: 45.00, // R$
        weight: '400g de frango',
        image: 'AlitasBBQ.png', // Placeholder
        style: 'bg-white',
    },
];


const OTHER_DISHES = [
    {
        category: "SOPAS Y CREMAS",
        items: [
            { name: "Crema de Auyama", description: "Suave crema de calabaza con un toque de queso.", price: 4.50 },
            { name: "Sopa de Pollo", description: "Caldo de pollo con vegetales y fideos.", price: 5.00 },
        ]
    },
    {
        category: "PASTAS",
        items: [
            { name: "Pasta a la Carbonara", description: "Spaghetti con salsa cremosa, huevo y tocineta.", price: 9.50 },
            { name: "Lasaña Boloñesa", description: "Capas de pasta, carne y queso gratinado.", price: 12.00 },
        ]
    },
    {
        category: "ARROZ CHINO",
        items: [
            { name: "Arroz Especial", description: "Pollo, cerdo, camarones y vegetales.", price: 11.50 },
            { name: "Arroz con Pollo", description: "Arroz frito con trozos de pollo y salsa de soya.", price: 9.00 },
        ]
    },
    {
        category: "CACHAPAS",
        items: [
            { name: "Cachapa Clásica", description: "Cachapa de maíz tierno con queso de mano.", price: 7.00 },
            { name: "Cachapa con Pernil", description: "Añade pernil horneado a tu cachapa.", price: 10.50 },
        ]
    },
];

// ChickenPlatoCard.jsx o integrado

// ChickenPlatoCard.jsx o integrado

// Recibe el plato y el índice de su posición
const ChickenPlatoCard = ({ plato, index }) => {
    const { name, price, description, weight, image, style } = plato;
    const [priceBS, setPriceBS] = useState(null);
    useEffect(() => {
        // ... Lógica de fetch("https://ve.dolarapi.com/v1/dolares/oficial") ...
        // ... setPriceBS(...)
        // Factor ficticio R$ -> BS para el ejemplo
        const tasaFija = 36.0;
        const conversionFactor = 7.0;
        if (price) setPriceBS((tasaFija * price * conversionFactor).toFixed(2));
    }, [price]);

    // Determina si el índice es par o impar:
    // Platos en posición 0, 2, 4... tendrán la imagen a la derecha (orden normal).
    // Platos en posición 1, 3, 5... tendrán la imagen a la izquierda (orden invertido).
    const isOdd = index % 2 !== 0;

    // Clases de ordenación de Tailwind
    // Por defecto, los elementos flex van de izquierda a derecha (0, 1)
    // Cuando isOdd es true, invertimos el orden de toda la tarjeta con flex-row-reverse
    const rowDirection = isOdd ? 'flex-row-reverse' : 'flex-row';

    return (
        // Contenedor principal: Usamos flex para la disposición horizontal
        <div
            className={`relative ${style} h-[25ch] rounded-[30px] p-2 flex items-center shadow-2xl my-8 max-w-xl mx-auto overflow-hidden transition-all duration-300 hover:shadow-red-800/50 ${rowDirection}`}
        >

            {/* 1. SECCIÓN DE TEXTO (Nombre, Precio) */}
            {/* La flexibilidad del div garantiza que ocupe el espacio restante */}
            <div className={`flex-1 flex flex-col p-4 sm:p-8 z-10 ${isOdd ? 'items-end' : 'items-star'}`}>
                <h3 className={`text-3xl font-black   w-[150px] text-nowrap uppercase text-gray-900 leading-none
                    ${isOdd ? 'text-end' : 'text-star'}`}>
                    {name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 mb-3">
                    {description}
                </p>

                {/* Contenedor del Precio Grande */}
                <div className="flex space-x-1 mt-2 font-impact">

                    <div className="flex flex-col justify-center items-center">
                        <span className="text-[60%] text-nowrap text-gray-600">Por tan solo</span>
                        <span className="text-[100%] text-red-600">USD$</span>
                    </div>

                    <div className="flex items-center">
                        <span className="text-6xl h2 text-red-600 leading-none">{Math.floor(price)}</span>
                        <span className="text-3xl  text-red-600 leading-none">
                            ,{((price % 1) * 100).toFixed(0).padStart(2, '0')}
                        </span>
                    </div>
                </div>

                <div>
                    <span>{weight}</span>
                </div>

                {/* Peso y Precio en BS */}
                <p className="text-sm text-gray-500 mt-1 flex justify-between">
                    <span className=" text-xs">
                        (Aprox. Bs {priceBS === null ? 'Cargando...' : priceBS})
                    </span>
                </p>
            </div>

            {/* 2. SECCIÓN DE IMAGEN */}
            {/* Ocupa 1/3 del espacio de la tarjeta */}
            <div
                className="w-[50ch] flex m-auto p-0 h-full"


            >
                <img src={`../public/IMG/${image}`} className={`object-contain  w-full  h-auto scale-190  ${isOdd ?'translate-x-[-20%]': 'translate-x-[20%]'}  md:scale-150`} alt="" />
            </div>

        </div>
    );
};

const PizzasCategory = () => {
    return (
        // Contenedor principal: usa grid para las dos columnas
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

            {/* COLUMNA IZQUIERDA: LISTA DEL MENÚ */}
            <div className="bg-white text-gray-600 p-6 sm:p-10 relative overflow-hidden">
                {/* Puedes añadir un z-index alto para las hojas de albahaca si son imágenes */}

                {/* Título Principal */}
                <header className="mb-8 relative z-10">
                    <h1 className="text-5xl font-impact uppercase text-yellow-500 leading-none">
                       ricas
                    </h1>
                    <h2 className="text-6xl font-impact uppercase menu-item-title leading-none">
                        PIZZA
                    </h2>
                </header>

                {/* Lista de Platos */}
                <div className="relative z-10 space-y-4">
                    {PIZZAS.map((pizza, index) => (
                        <Plato
                            key={pizza.name}
                            plato={{
                                name: pizza.name,
                                description: pizza.ingredients,
                                price: pizza.price,
                                priceClass: "text-orange-500" 
                            }}
                        />
                    ))}
                </div>


            </div>

            {/* COLUMNA DERECHA: SECCIÓN VISUAL (PIZZA) */}
            {/* Aplica la clase personalizada para el fondo y el texto "PIZZA" */}
            <div className="pizza-visual-bg bg-amber-50 flex justify-center items-center p-4">
                {/* Contenedor de la pizza para centrarla y darle un z-index */}
                <div className="relative z-10 w-full max-w-lg transform rotate-3 scale-110">
                    {/* Placeholder para la imagen de la pizza */}
                    <div className="bg-cover bg-center rounded-full shadow-2xl overflow-hidden">
                        <img src="../public/IMG/Pizzaa.png" className="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};




// PollosCategory.jsx o integrado

// PollosCategory.jsx o integrado

const PollosCategory = ({ POLLOS }) => {
    return (
        <section className="p-4 sm:p-10 bg-red-600">
            <h2 className="text-4xl  font-impact uppercase text-white mb-10 text-center">
                 Pollos
            </h2>

            <div className="space-y-4">
                {/* PASAMOS EL ÍNDICE AL COMPONENTE HIJO */}
                {POLLOS.map((plato, index) => (
                    <ChickenPlatoCard
                        key={plato.name}
                        plato={plato}
                        index={index} // 👈 ¡CLAVE!
                    />
                ))}
            </div>
        </section>
    );
};



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


const platoEjemplo = {
    name: "Plato Especial del Chef",
    price: 15.50,
    descripcion: "Una deliciosa combinación de sabores frescos y especias."
};

const Carta = () => {
    return (
        <section className="pt-10">
            <h1 className="ml-10">Menú</h1>

            <PizzasCategory PIZZAS={PIZZAS} />
            {/* Separador entre categorías */}
            <div className="h-10 bg-gray-100"></div>

            {/* 2. SECCIÓN DE POLLOS (Estilo de tarjeta apilada) */}
            <PollosCategory POLLOS={POLLOS} />

            
        </section>
    );
};

export default Carta;