import { useState, useEffect } from "react";

const Cachapas = ({ cachapa }) => {

    const { name, price, description, image } = cachapa;

    return (
        <div className="flex w-[350px] max-w-[100dvw] gap-5 items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors">
           
            <div className="flex-grow">
                <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl uppercase  font-bold break-words text-white">{name}</h3>
                    <div className="px-3 py-1 bg-amber-900/60 text-white rounded-full font-semibold whitespace-nowrap">
                        ${price.toFixed(2)}
                    </div>
                </div>
                <div className="w-full h-px bg-amber-100/20 my-2"></div>
              
            </div>
        </div>
    );
}


const CachapasCategory = ({ CACHAPAS = [] }) => {

    return (<>
        <section className="h-max flex-col justify-center gap-10 flex-wrap max-w-[100dvw] bg-cachapas p-0 flex flex-w items-center bg-gradient-to-br from-gray-900 to-amber-950">

<div className="flex justify-start   pt-10 flex-col w-1/2 items-center">
            <div className="flex h-max items-end">

                <div className="bg-[#fcb340] h-6/10 text-[#592c0c] rounded-2xl p-5 flex flex-col items-start">
                    <h3 className="text-sm uppercase tracking-wider font-black">Una buena</h3>
                    <h2 className="text-3xl uppercase font-black break-words">Ca</h2>
                    <h2 className="text-3xl uppercase font-black break-words">cha</h2>
                    <h2 className="text-3xl uppercase font-black break-words">pa</h2>
                </div>
                <div className="h-[max-content] mb-5 translate-x-[-10px] w-20  bg-red-600 p-4 rounded-4xl">
                    <span>
                        <svg className="w-full scale-180 mb-4" fill="none" viewBox="0 0 192 192"><path fill="#fff" d="m160.077 112.697-5.212-9.068-25.206 15.352 27.996-35.644 4.233-2.484-1.047-1.573 1.923-2.457-8.835-7.353-4.043 5.153-81.62 47.752 30.177-36.29 56.208-30.81-5.34-10.322-30.615 16.775 15.075-18.118-8.637-7.61-33.928 40.797-33.698 18.48 25.799-34.106 16.166-8.414-5.134-10.438L47.24 66.836l12.844-16.995-8.972-7.186L24 78.538l.42.336 5.066 10.314 30.057-15.653-27.396 36.21 4.49 3.597 2.67 5.162 31.646-17.35-34.848 41.911 8.637 7.609 1.734-2.086 84.067-49.343-27.911 35.547.456.38-.043.027 5.786 10.066 37.123-22.616-14.295 23.067L141.24 152 164 115.278l-3.923-2.581Z" /></svg>
                        <strong className="block relative text-xl uppercase">
                            <svg className="absolute top-[-20px] rotate-25 right-[-10px] size-10"  viewBox="0 0 1920 1084" fill="none"><path d="M496.36 933.523V714.851C496.36 561.292 291.434 507.245 214.842 640.706L139.842 771.307C118.857 807.89 71.5077 820.16 35.068 798.029C-0.0838509 776.726 -9.85666 729.981 10.5223 694.376L365.525 76.149C442.117 -57.2368 647.043 -3.26524 647.043 150.37V369.869C647.043 523.353 851.893 577.4 928.56 444.165L1140.46 75.6974C1217.12 -57.6133 1421.97 -3.56631 1421.97 149.993V371.074C1421.97 524.558 1626.67 578.605 1703.42 445.445L1780.23 312.134C1801.29 275.626 1848.64 263.356 1885.01 285.562C1920.16 307.015 1929.86 353.685 1909.4 389.29L1552.73 1008.42C1475.99 1141.58 1271.29 1087.53 1271.29 934.05V713.722C1271.29 560.238 1066.44 506.191 989.773 639.426L777.877 1007.89C701.21 1141.2 496.36 1087.15 496.36 933.598V933.523Z" fill="white" /></svg>
                            Lo
                        </strong>
                        <span className="text-md uppercase font-medium break-words">
                            resu
                            elve
                            todo
                        </span>
                    </span>
                    <svg className="absolute fill-red-600 bottom-[-4px] left-[-4px] -rotate-95" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-pointer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.039 4.277l3.904 13.563c.185 .837 .92 1.516 1.831 1.642l.17 .016a2.2 2.2 0 0 0 1.982 -1.006l.045 -.078l1.4 -2.072l4.05 4.05a2.067 2.067 0 0 0 2.924 0l1.047 -1.047c.388 -.388 .606 -.913 .606 -1.461l-.008 -.182a2.067 2.067 0 0 0 -.598 -1.28l-4.047 -4.048l2.103 -1.412c.726 -.385 1.18 -1.278 1.053 -2.189a2.2 2.2 0 0 0 -1.701 -1.845l-13.524 -3.89a1 1 0 0 0 -1.236 1.24z" /></svg>
                </div>
            </div>

    
</div>
<div className="flex flex-col pb-10 items-center gap-2 justify-center">
<h1 className="text-4xl   w-max font-extrabold text-center text-white mb-12 border-b-4 border-yellow-500 pb-2">Disponibles</h1>
    {CACHAPAS.map((cachapa)=>{
        return(
            <Cachapas cachapa={cachapa} />
        )
    })}
</div>
        </section>

    </>)

}


export default CachapasCategory