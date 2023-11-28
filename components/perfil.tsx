import TypewriterEffect from "./autoWrithe";
import mifoto from "../public/mifoto.png";
import Image from 'next/image';

export default function Perfil() {

    return (
        <div className="container mx-auto mt-16 lg:mt-24 py-8 px-6 lg:px-0">
            <section className="grid grid-cols-1 md:grid-cols-12 gap-2 p-2 lg:p-0 mb-10 mt-5 2xl:mb-40">
                <div className="col-span-7 xl:col-span-8 place-self-center text-center md:text-left">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold 2xl:text-8xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">Hello, I'm</span>
                        <span className="text-blue-500"> Bravo</span>
                        <span className=" " >
                            <TypewriterEffect />
                        </span>
                    </h1>
                    <div className="text-slate-50">
                        <p className="text-slate-50">
                        Convierto ideas en experiencias digitales cautivadoras con pasión y precisión. Mi enfoque combina creatividad, funcionalidad y atención al usuario para lograr resultados excepcionales. Estoy listo para abordar nuevos desafíos y crear soluciones digitales impactantes.
                        </p>
                        <p className="text-slate-50">
                            ¡Demos vida a tus ideas!
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-5">
                        <button className="text-white px-5 py-3 rounded-full border-4  text-lg border-green-500">
                        contáctame
                        </button>
                        <button className="text-white px-5 py-3  rounded-full border-4  text-lg border-green-500">
                        descargar currículum
                        </button>
                    </div>
                </div>
                <div className="rounded-full overflow-hidden bg-[#181818] w-[290px] h-[290px]  2xl:w-[500px] 2xl:h-[500px] lg:w-[400px] lg:h-[400px] md:w-[315px] md:h-[315px] relative">
                    <Image src={mifoto} alt="mi foto" />
                </div>
            </section>
            <section className="py-8  xl:gap-16 sm:py-16 ">
                <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
                        <h2 className="text-white text-4xl font-bold flex flex-row">
                            + 1
                        </h2>
                        <p className="text-[#ADB7BE] text-base">
                            Years of Experience
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
                        <h2 className="text-white text-4xl font-bold flex flex-row">
                            10 +
                        </h2>
                        <p className="text-[#ADB7BE] text-base">
                        Projects
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
                        <h2 className="text-white text-4xl font-bold flex flex-row">
                            3
                        </h2>
                        <p className="text-[#ADB7BE] text-base">
                        Clients
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}