

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
const PIZZAS = [
    {
        name: 'Margarita',
        baseImage: 'Margarita.png', // Base de pizza de queso
        ingredients: ['Queso Mozzarella', 'Pasta de Tomate', 'Jamon'],
         price: {
            mediana:5.00,
            familiar:10.00  
        },

    },

    {
        name: 'King',
        baseImage: 'King.png', // Base de pizza de queso
        ingredients: ['Queso Mozzarella', 'Pasta de Tomate', 'Tocineta', 'Maíz', 'Champiñones', 'Aceitunas'],
          price: {
            mediana:6.50,
            familiar:15.00  
        }
    },
      {
        name: 'Dos Quesos',
        baseImage: 'Pizzaa.png', // Base de pizza de queso
        ingredients: ['Queso Mozzarella', 'Pasta de Tomate', 'Pimenton', 'Queso pecorino', 'Maíz'],
        price: {
            mediana:6.50,
            familiar:14.00  
        }
    },
    {
        name: 'Napoleón',
        baseImage: 'Napolion.png', // Base de pizza de queso
        ingredients: ['Queso Mozzarella', 'Pasta de Tomate', 'Jamon', 'Pimienton', 'Cebollas'],
          price: {
            mediana:6.50,
            familiar:16.00  
        }

    },
    {
        name: 'Vegetariana',
        baseImage: 'Vegetariana.png', // Base de pizza de queso
        ingredients: ['Queso Mozzarella', 'Pasta de Tomate', 'Pimenton', 'Champiñones', 'Aceitunas'],
          price: {
            mediana:6.50,
            familiar:14.00  
        }
    },
];

const POLLOS = [
    {
        name: 'Pollo Broaster',
        description: 'Pollo empanizado y frito crujiente y delicioso',
        portions: [
            { size: '1/4', price: 6.50, weight: '1/4 de pollo con contorno' },
            { size: '1/2', price: 11.00, weight: '1/2 pollo con contorno' },
            { size: 'Entero', price: 22.00, weight: 'Pollo entero con contorno' },
            { size: 'Solo', price: 16.50, weight: 'Pollo solo' }
        ],
        image: 'Broster.png',
        style: 'bg-white',
    },
    {
        name: 'Pollo Asado',
        description: 'Pollo asado jugoso y delicioso',
        portions: [
            { size: '1/4', price: 5.00, weight: '1/4 con contorno' },
            { size: '1/2', price: 9.50, weight: '1/2 con contorno' },
            { size: 'Entero', price: 18.00, weight: 'Pollo entero con contorno' },
            { size: 'Solo', price: 15.00, weight: 'Pollo solo' }
        ],
        image: 'Asado.png',
        style: 'bg-white',
    },

    {
        name: "Costillas BBQ",
        price: 11.00,
        description: "Costillas de cerdo bañadas en salsa BBQ",
        image: "CostillasBBQ.png",
        portions: [
            { size: '250 grm', price: 4.00, weight: '250 grm' },


        ],
        style: 'bg-white',
    },
    {
        name: 'Alitas BBQ',
        description: 'Asadas a la perfección con salsa BBQ ahumada',
        portions: [
            { size: '5 Piezas', price: 4.00, weight: '5 piezas' },

        ],
        image: 'AlitasBBQ.png',
        style: 'bg-cyan-100',
    },
];


const SOPAS = [
    {
        name: "Sopa de Res",
        description: "Caldo de res con yuca, topocho, yansin y ahuyama",
        price: 2.00,
        image: 'Sopa Res.png',
        style: 'bg-white',
    },
    {
        name: "Sopa de Mondogo",
        description: "Caldo de mondogo con yuca, topocho, yansin, ahuyama, platano maduro para un sabor dulce",
        price: 3.50,
        image: 'Mondongo.png',
        style: 'bg-white',
    },
    {
        name: "Sopa de Menestron",
        description: "Caldo de menestron con verduras, caraotas rojas y pasta",
        price: 3.50,
        image: 'Menestron.png',
        style: 'bg-white',
    },
]

const MENUDELDIA = [
    {
        name: "PASTA BOLOÑESA",
        description: "Clásicos spaghetti con la tradicional salsa de carne y toque de queso parmesano.",
        price: 3.50,
        image: 'Pastabolo.jpeg',
    },
    {
        name: "ARROZ CHINO",
        description: "Exquisito arroz frito con una mezcla de vegetales y proteínas (pollo, carne, jamón).",
        price: 3.50,
        image: 'ArrozChino.webp',
    },
    {
        name: "SHAWARMA DE POLLO",
        description: "Tiras de pollo especiado servido en pan de pita con salsa de la casa y vegetales frescos.",
        price: 10,
        image: 'ShawarmaPollo.jpg',
    },
    {
        name: "SHAWARMA DE CARNE",
        description: "Jugosas tiras de carne marinada servida en pan de pita con salsa y vegetales.",
        price: 10,
        image: 'ShawarmaCarne.jpg',
    },
    {
        name: "SHAWARMA MIXTO",
        description: "Combinación de pollo y carne servido en pan de pita con salsa y vegetales.",
        price: 10,
        image: 'ShawarmaMixta.jpg',
    },
    {
        name: "TEQUEÑOS",
        description: "Deliciosos dedos de queso fritos envueltos en masa crujiente, perfectos para compartir.",
        price: 5,
        image: 'Tequeños.jpg',
    },
    {
        name: "ALITAS BBQ",
        description: "Porción de alitas de pollo bañadas en salsa BBQ, servidas con aderezo.",
        price: 6.5,
        image: 'AlitasBBQ.png',
    },
    {
        name: "NUGETS DE POLLO",
        description: "Tiernos trozos de pollo apanados y fritos, ideales para un snack o acompañamiento.",
        price: 5,
        image: 'Nuggets.jpg',
    },


    {
        name: "CLUB HOUSE",
        description: "Sandwich de triple capa con jamón, queso, pollo, tocineta, lechuga y tomate.",
        price: 10,
        image: 'ClubHouse.jpeg',
    },
    {
        name: "EMPANADA DE POLLO",
        description: "Masa de maíz frita rellena de pollo guisado y sazonado.",
        price: 1.35,
        image: 'dePollo.jpeg',
    },
    {
        name: "EMPANADA DE MOLIDA",
        description: "Masa de maíz frita rellena de carne de res molida.",
        price: 1.35,
        image: 'Molida.webp',
    },
    {
        name: "EMPANADA DE PEPITONA",
        description: "Masa de maíz frita rellena de pepitonas en salsa.",
        price: 1.35,
        image: 'Empanada.jpg',
    },
    {
        name: "EMPANADA DE MECHADA",
        description: "Masa de maíz frita rellena de carne de res mechada y guisada.",
        price: 1.35,
        image: 'Mechada.jpg',
    },
    {
        name: "PASTELITOS DE CARNE",
        description: "Masa de harina frita rellena de guiso de carne de res.",
        price: 1.35,
        image: 'PastelitoMolida.webp',
    },
    {
        name: "PASTELITOS DE POLLO",
        description: "Masa de harina frita rellena de guiso de pollo.",
        price: 1.35,
        image: 'PastelitoPollo.jpg',
    },
    {
        name: "PASTELITOS DE MECHADA",
        description: "Masa de harina frita rellena de carne de res mechada.",
        price: 1.35,
        image: 'PastelitoMechada.jpg',
    },
    {
        name: "EMPANADAS DE CORDON BLEU",
        description: "Empanada de pollo, jamon y queso",
        price: 1.5,
        image: 'PastelitoCordonBlue.jpeg',
    },
];
const BEBIDAS = [
    {
        name: "Polarcita",
        description: "Agua",
        price: 1,
        image: 'Polar.png',
    },
    {
        name: "Polar light",
        description: "Agua",
        price: 1,
        image: 'PolarClara.png',
    },
    {
        name: "Black & White",
        description: "Agua",
        price: 1,
        image: 'BlackandWhite.png',
    },
    {
        name: "JUGOS NATURALES",
        price: 2,
        image: 'JugoNatural.png' // Placeholder image name
    },
    {
        name: "REFRESCO DE BOTELLITA",
        price: 1,
        image: 'RefrezcoBotellita.png' // Placeholder image name
    },
    {
        name: "REFRESCO DE 1L.",
        price: 1.50,
        image: '1L.png' // Placeholder image name
    },
    {
        name: "REFRESCO DE 2L.",
        price: 3,
        image: '2L.png' // Placeholder image name
    },
    {
        name: "AGUA MINERAL",
        price: 1,
        image: 'agua.png' // Placeholder image name
    },
    {
        name: "ENERGIZANTES",
        price: 2,
        image: 'Energizante.png' // Placeholder image name
    },

    {
        name: "OLD PARR",
        price: 60,
        image: 'OldPar.png' // Placeholder image name
    },
    {
        name: "BUCHANAN'S",
        price: 60,
        image: 'buchanans.png' // Placeholder image name
    },

    {
        name: "GRANT",
        price: 20,
        image: 'grant.png' // Placeholder image name
    },
    {
        name: "SANGRÍA CAROREÑA",
        price: 15,
        image: 'Sangria.png' // Placeholder image name
    },
    {
        name: "BODEGA 1.800",
        price: 15,
        image: 'Bodega1800.png' // Placeholder image name
    },
    {
        name: "HIHGCLASS",
        price: 15,
        image: 'HighClass.png' // Placeholder image name
    },
    {
        name: "CALAZAN",
        price: 15,
        image: 'CALAZAN.png' // Placeholder image name
    },
    {
        name: "5 ESTRELLAS",
        price: 15,
        image: '5estrellas.png' // Placeholder image name
    },
    {
        name: "CACIQUE",
        price: 25,
        image: 'CACIQUE.png' // Placeholder image name
    },
    {
        name: "MONEDA DE ORO",
        price: 15,
        image: 'MONEDADEORO.png' // Placeholder image name
    }
]

const PARRILLAS = [
    {
        name: "PARRILLA MIXTA 1P",
        description: "Incluye: Yuca, ensalada y papas fritas",
        price: 8,
        image: 'Combo5.png',
        style: 'bg-gray-100',
    },
    {
        name: "PARRILLA MIXTA 2P",
        description: "Incluye: Yuca, ensalada y papas fritas",
        price: 16.50,
        image: 'Combo5.png',
        style: 'bg-gray-100',
    },
    {
        name: "PARRILLA ESPECIAL 3P",
        description: "Incluye: Yuca, ensalada y papas fritas",
        price: 25,
        image: 'Parrilla 4.png'
    },
    {
        name: "PARRILLA ESPECIAL 4P",
        description: "Incluye: Yuca, ensalada y papas fritas",
        price: 35,
        image: 'Parrilla 4.png'
    },
    {
        name: "PARRILLA FAMILIAR 5P",
        description: "Incluye: Yuca, ensalada y papas fritas",
        price: 40,
        image: 'Parrilla familiar.png'
    },
    {
        name: "CHURRASCO DE LOMO",
        description: "Papas fritas y ensalada.",
        price: 8,
        image: 'Churrasco de carne.jpg'
    },
    {
        name: "CHURRASCO DE POLLO",
        description: "Papas fritas y ensalada.",
        price: 8,
        image: 'Churrasco de pollo.png' // Marcador de posición
    },
    {
        name: "COCHINO ASADO",
        description: null, // No hay descripción adicional visible
        price: 16,
        image: 'Cochino Asado.webp' // Marcador de posición
    },
    {
        name: "CARNE ASADA",
        description: null, // No hay descripción adicional visible
        price: 20,
        image: 'Carne-Asada-main-1.webp' // Marcador de posición
    },
    {
        name: "PARRILLA DE MARY TIERRA",
        description: "Carne, pollo, cochino, pulpo, camarones y papas fritas.",
        price: 20,
        image: 'parrilla mar y tierra.jpg' // Marcador de posición
    }
];


const CACHAPAS = [
    {
        name: "Cachapa con queso guayanés",
        image: "Cachapa.png", // Nombre de imagen sugerido
        price: 2.5,
        description: "Cachapa tradicional con abundante queso guayanés." // Descripción ampliada
    },
    {
        name: "Cachapa con cochino frito",
        image: "Cachapa Cochino.png", // Nombre de imagen sugerido
        price: 6,
        description: "Cachapa acompañada de jugosos trozos de cochino frito." // Descripción ampliada
    },
    {
        name: "Cachapa con pollo en salsa negra",
        image: "Cachapa Pollo.png", // Nombre de imagen sugerido
        price: 6,
        description: "Cachapa rellena de pollo desmechado en salsa negra." // Descripción ampliada
    },
    {
        name: "Cachapa con pescado frito",
        image: "Cachapa Pescado.png", // Nombre de imagen sugerido
        price: 6,
        description: "Cachapa servida con un filete de pescado frito." // Descripción ampliada
    }
];

const ANTOJOS = [

    {
        name: "Perro Sencillo",
        price: 1.20,
        description: "Pan, salchicha, salsas al gusto",
        image: "Perros Sencillos.png"
    },


    {
        name: "Perro Polaco",
        price: 4.00,
        description: "Pan, salchicha polaca, cebolla caramelizada, mostaza",
        image: "Perro Polaco.png"
    },
    {
        name: "Perro Especial",
        price: 2.00,
        description: "Pan artesanal, doble salchicha, queso gratinado, tocineta",
        image: "Perro Especial.png"
    },

    {
        name: "SalchiPapa",
        price: 9.00,
        description: "Pan artesanal, doble salchicha, queso gratinado, tocineta",
        image: "SalchiPapa.png"
    },
    {
        name: "Papa Loca",
        price: 11.00,
        description: "Pan artesanal, doble salchicha, queso gratinado, tocineta",
        image: "Papa Loca.png"
    },
    {
        name: "TerraPapa",
        price: 11.00,
        description: "Pan artesanal, doble salchicha, queso gratinado, tocineta",
        image: "Terra Papa.png"
    },
    {
        name: "Chicharon Carnudo",
        price: 6.00,
        description: "Pan artesanal, doble salchicha, queso gratinado, tocineta",
        image: "Chicharon.png"
    },
    {
        name: "Porcion de papas fritas",
        price: 4.00,
        description: "Pan artesanal, doble salchicha, queso gratinado, tocineta",
        image: "Papas Fritas.jpg"
    },

    {
        name: "Chorizo",
        price: 1.00,
        description: "Pan artesanal, doble salchicha, queso gratinado, tocineta",
        image: "Chorizo.webp"
    },

];
const COMBOS = [

    {
        name: "COMBO 1",
        price: 13.00,
        platos: [
            "2 Cachapas con queso",
            "200grs de carne asada",
            "200 gr de cochino",
            "1 Refresco 2 Litros"
        ],
        image: 'Combo1.png',
        style: 'bg-green-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 2",
        price: 40.00,
        platos: [
            "4 Cachapas con queso",
            "1 Pollo asado",
            "4 Sopas de Res",
            "1 Refresco 2 Litros"
        ],
        image: 'Combo2.png',
        style: 'bg-red-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 3",
        price: 18.00,
        platos: [
            "2 Arroz Chino",
            "1/2 Pollo a la Broaster",
            "1 Refresco 2 Litros"
        ],
        image: 'Combo3.png',
        style: 'bg-yellow-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 4",
        price: 15.00,
        platos: [
            "2 Pasta a la Boloña",
            "2 Sopas de Res",
            "1 Refresco 2 Litros"
        ],
        image: 'Combo4.png',
        style: 'bg-blue-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 5",
        price: 27.50,
        platos: [
            "1 Balde de Cerveza",
            "1 Parrilla para dos personas"
        ],
        image: 'Combo5.png',
        style: 'bg-gray-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 6",
        price: 26.00,
        platos: [
            "1 Balde de Cerveza",
            "Pollo asado con bollitos"
        ],
        image: 'Combo6.png',
        style: 'bg-orange-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 7",
        price: 20.00,
        platos: [
            "1 Balde de Cerveza",
            "250grs. de carne asada",
            "250grs. de cochino",
            "Ración de casabe tostado"
        ],
        image: 'Combo7.png',
        style: 'bg-purple-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 8",
        price: 15.00,
        platos: [
            "10 Perros calientes sencillos",
            "1 Refresco de 2 Litros"
        ],
        image: 'Combo8.png',
        style: 'bg-brown-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 9",
        price: 45.00,
        platos: [
            "Parrilla para 4 personas",
            "1 Balde de Cerveza"
        ],
        image: 'Combo9.png',
        style: 'bg-pink-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 10",
        price: 15.00,
        platos: [
            "2 Hamburguesas de carne",
            "1 Ración de papas fritas",
            "1 Refresco de 2 Litros"
        ],
        image: 'Combo10.png',
        style: 'bg-teal-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 11",
        price: 16.00,
        platos: [
            "1 Balde de Cerveza",
            "1 Ración de Alas BBQ"
        ],
        image: 'Combo11.png',
        style: 'bg-cyan-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 12",
        price: 15.00,
        platos: [
            "1 Balde de Cerveza",
            "1 Ración de Tequeños"
        ],
        image: 'Combo12.png',
        style: 'bg-lime-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 13",
        price: 30.00,
        platos: [
            "4 Hamburguesas de carne",
            "6 Perros calientes sencillos",
            "1 Refresco 2 Litros"
        ],
        image: 'Combo13.png',
        style: 'bg-indigo-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 14",
        price: 18.00,
        platos: [
            "2 Hamburguesas de pollo",
            "1 Ración de papas fritas",
            "1 Refresco 2 Litros"
        ],
        image: 'Combo14.png',
        style: 'bg-emerald-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 15",
        price: 18.00,
        platos: [
            "10 Sopas de Res",
            "1 Refresco de 2 Litros"
        ],
        image: 'Combo15.png',
        style: 'bg-amber-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 16",
        price: 30.00,
        platos: [
            "2 Pollos a la Broaster",
            "15 Arepitas",
            "1 Refresco 2 Litros"
        ],
        image: 'Combo16.png',
        style: 'bg-rose-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 17",
        price: 24.00,
        platos: [
            "6 Perros sencillos",
            "2 Hamburguesas de carne",
            "1 Pizza",
            "1 Refresco 2 Litros"
        ],
        image: 'Combo17.png',
        style: 'bg-violet-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 18",
        price: 45.00,
        platos: [
            "4 Hamburguesas",
            "1 Pollo a la Broaster",
            "1 Contorno",
            "1 Refresco 2 Litros"
        ],
        image: 'Combo18.png',
        style: 'bg-fuchsia-100',
        type: 'COMBO',
    },
    {
        name: "COMBO 19",
        price: 20.00,
        platos: [
            "10 Perros sencillos",
            "1 Pizza",
            "1 Refresco de 2 Litros"
        ],
        image: 'Combo19.png',
        style: 'bg-orange-200',
        type: 'COMBO',
    },
    {
        name: "COMBO 20",
        price: 42.00,
        platos: [
            "1 Parrilla para 4 personas",
            "1 Pizza",
            "1 Refresco de 2 Litros"
        ],
        image: 'Combo20.png',
        style: 'bg-red-200',
        type: 'COMBO',
    },
    {
        name: "COMBO 21",
        price: 36.00,
        platos: [
            "2 Pizzas",
            "4 Hamburguesas de pollo",
            "1 Refresco de 2 Litros"
        ],
        image: 'Combo21.png',
        style: 'bg-yellow-200',
        type: 'COMBO',
    },
    {
        name: "COMBO 22",
        price: 50.00,
        platos: [
            "4 Hamburguesas de carne",
            "4 Hamburguesas de pollo",
            "8 Perros Calientes",
            "1 Refresco de 2 Litros"
        ],
        image: 'Combo22.png',
        style: 'bg-blue-200',
        type: 'COMBO',
    },
    {
        name: "COMBO 23",
        price: 8.00,
        platos: [
            "5 Perros sencillos",
            "1 Refresco 2 Litros"
        ],
        image: 'Combo23.png',
        style: 'bg-teal-200',
        type: 'COMBO',
    },
    {
        name: "COMBO 24",
        price: 20.00,
        platos: [
            "2 Baldes de Cerveza"
        ],
        image: 'Combo24.png',
        style: 'bg-lime-200',
        type: 'COMBO',
    },
    {
        name: "COMBO 25",
        price: 28.00,
        platos: [
            "2 Sangrías"
        ],
        image: 'Combo25.png',
        style: 'bg-red-300',
        type: 'COMBO',
    },
    {
        name: "COMBO 26",
        price: 22.00,
        platos: [
            "1 Pizza",
            "1 Parrilla para 1 persona",
            "1 Balde de Cerveza"
        ],
        image: 'Combo26.png',
        style: 'bg-yellow-300',
        type: 'COMBO',
    },
    {
        name: "COMBO 27",
        price: 55.00,
        platos: [
            "2 Sangrías",
            "1 Parrilla para 3 personas"
        ],
        image: 'Combo27.png',
        style: 'bg-green-300',
        type: 'COMBO',
    },
    {
        name: "COMBO 28",
        price: 20.00,
        platos: [
            "1 Sangría",
            "1 Ración de Tequeños"
        ],
        image: 'Combo28.png',
        style: 'bg-blue-300',
        type: 'COMBO',
    },
    {
        name: "COMBO 29",
        price: 20.00,
        platos: [
            "1 Sangría",
            "1 Ración de Alitas"
        ],
        image: 'Combo29.png',
        style: 'bg-indigo-300',
        type: 'COMBO',
    },
    {
        name: "COMBO 30",
        price: 30.00,
        platos: [
            "1 Sangría",
            "1 Pollo asado con bollitos"
        ],
        image: 'Combo30.png',
        style: 'bg-purple-300',
        type: 'COMBO',
    },
    {
        name: "COMBO 31",
        price: 16.50,
        platos: [
            "5 Hamburguesas sencillas",
            "1 Refresco de 1 Litro"
        ],
        image: 'Combo31.png',
        style: 'bg-gray-400',
        type: 'COMBO',
    },
    {
        name: "COMBO 32",
        price: 16.50,
        platos: [
            "2 Hamburguesas de carne especial",
            "Ración de nuggets",
            "1 Refresco de 1 Litro"
        ],
        image: 'Combo32.png',
        style: 'bg-teal-400',
        type: 'COMBO',
    },
    {
        name: "COMBO 33",
        price: 17.00,
        platos: [
            "2 Hamburguesas de pollo crispy",
            "Ración de papas",
            "1 Refresco de 1 Litro"
        ],
        image: 'Combo33.png',
        style: 'bg-cyan-400',
     
    }
];


export {
    OTHER_DISHES,
    PIZZAS,
    CACHAPAS,
    POLLOS,
    SOPAS,
    COMBOS,
    MENUDELDIA,
    BEBIDAS,
    PARRILLAS,
    ANTOJOS,
};