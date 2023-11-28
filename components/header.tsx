"use client"

import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Header() {

    const [mobile, setMobile] = useState<boolean>(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#121212] bg-opacity-100 z-50 lg:bg-opacity-95  lg:mb-4 border-b-2 border-[#33353f] pb-3">
            <div className="flex flex-wrap items-center justify-between mx-auto p-5">
                <a className="text-2xl md:text-3xl text-white font-semibold">
                    <span className="font-extrabold">
                        Jose
                    </span>
                    <span className="font-extralight">
                        Bravo
                    </span>
                    <span className="font-extrabold  bg-clip-text gradient-background text-[#3fcb7c]">
                        .
                    </span>
                </a>
                <div className="mobile-menu block md:hidden" >
                    <button onClick={() => setMobile(!mobile)} className="flex items-center rounded px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white">
                        { mobile? <AiOutlineClose />:<CiMenuBurger />}
                    </button>
                </div>
                <div className="menu hidden md:block md:w-auto z-50">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        <li>
                            <button className="relative font-medium -top-1 -left-1 hover:top-0 hover:left-0 transition-all bg-[#181818] py-2.5 px-5 uppercase text-[#ADB7BE] hover:text-white before:content-[''] before:absolute before:top-1 before:left-1 before:hover:top-0 before:hover:left-0 before:w-full before:h-full before:border-2 before:hover:border-[#181818] before:border-[#3fcb7c] before:-z-10 before:transition-all before:rounded-full rounded-full ">
                                 ACERCA DE
                            </button>
                        </li>
                        <li>
                            <button className="relative font-medium -top-1 -left-1 hover:top-0 hover:left-0 transition-all bg-[#181818] py-2.5 px-5 uppercase text-[#ADB7BE] hover:text-white before:content-[''] before:absolute before:top-1 before:left-1 before:hover:top-0 before:hover:left-0 before:w-full before:h-full before:border-2 before:hover:border-[#181818] before:border-[#3fcb7c] before:-z-10 before:transition-all before:rounded-full rounded-full ">
                                PROYECTOS
                            </button>    
                        </li>
                        <li>
                            <button className="relative font-medium -top-1 -left-1 hover:top-0 hover:left-0 transition-all bg-[#181818] py-2.5 px-5 uppercase text-[#ADB7BE] hover:text-white before:content-[''] before:absolute before:top-1 before:left-1 before:hover:top-0 before:hover:left-0 before:w-full before:h-full before:border-2 before:hover:border-[#181818] before:border-[#3fcb7c] before:-z-10 before:transition-all before:rounded-full rounded-full ">
                                CONTACTO
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            {mobile && <ul className=" flex flex-col items-center">
                <li>
                    <button onClick={() => setMobile(false)} className="block py-2 pl-3 pr-4 uppercase text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    ACERCA DE
                    </button>
                </li>
                <li>
                    <button onClick={() => setMobile(false)} className="block py-2 pl-3 pr-4 uppercase text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    PROYECTOS
                    </button>
                </li>
                <li>
                    <button onClick={() => setMobile(false)} className="block py-2 pl-3 pr-4 uppercase text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
                    CONTACTO
                    </button>
                </li>
            </ul>}
            <ul className=" flex flex-col items-center"></ul>
        </nav>
    )
}