import { useEffect, useState } from 'react';
import './Assets/Sidebar.css'


const IconsSiderbar = ({ isOpen, isActive, text, svg }) => {

    return (
        <>
            <div className=' flex justify-start flex-col p-3'>

                <div className={`relative flex gap-1 items-center justify-center px-1 transition-colors duration-200 
                  ${isOpen ? " before:bg-gray-500 hover:before:bg-violet-500" : "translate-x-0 "} 
                  
                
                  before:content-['_'] before:absolute before:w-1.5 before:h-1.5 

                   before:left-[-5px] before:top-1/2 before:rounded-[10px]

               
                  hover:scale-101
                  animacion
                 
                  after:content-['_'] after:absolute after:bg-violet-500 after:bottom-[-5px] 
                  after:left-1/2 after:-translate-x-1/2 after:w-full 
                  after:h-0.5 after:scale-x-0 after:origin-center 
                  after:transition-all after:duration-300 after:ease-in-out 
                  hover:after:scale-x-100
                `}>


                    {svg}
                    {isOpen ? text : ""}
                </div>
            </div>
        </>
    );
};




const Icono = ({ color, size, className, figura }) => {

    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke={color ? color : "CurrentColor"} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"
        >
          {figura ? figura : 'x'
}
       </svg>
    );
};



const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <label className={`hamburger open-btn  fixed top-0 z-10 animacion`} id="hamburger">               <input type="checkbox" onClick={toggleSidebar} />
                <svg viewBox="0 0 32 32">
                    <path className="line line-top-bottom "  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className="line" d="M7 16 27 16"></path>
                </svg>
            </label>

            <div className={`ingredients-wrapper  ${isOpen ? 'open' : ''} backdrop-blur-[4px] bg-black/70  shadow-sm fixed left-0 top-[90px] w-full`}>
 
                <div className='flex flex-col w-full py-4'>
                    {[
                        { id: 'HAMBURGUESAS', label: 'Hamburguesas' },
                        { id: 'PIZZAS', label: 'Pizzas' },
                        { id: 'POLLOS', label: 'Pollos' },
                        { id: 'BEBIDAS', label: 'Bebidas' },
                        { id: 'ANTOJOS', label: 'Antojos' },
                        { id: 'SOPAS', label: 'Sopas' },
                        { id: 'MENUDELDIA', label: 'Menú del Día' },
                        { id: 'PARRILLAS', label: 'Parrillas' },
                        { id: 'COMBOS', label: 'Combos' }
                    ].map((item) => (
                        <a 
                            key={item.id}
                            href={`#${item.id}`}
                            className="w-full px-6 py-3 text-lg font-medium text-white hover:bg-white/10 
                                       transition-colors duration-200 border-b border-white/10 last:border-b-0
                                       flex items-center gap-3 hover:pl-8"
                            onClick={() => setIsOpen(false)}
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                            {item.label}
                        </a>
                    ))}
                </div>


            </div>
           
            


        </>
    );
};


export default Sidebar;