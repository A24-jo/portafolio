"use client"
import Image from 'next/image';
import foto from "../public/foto.png";
import { useState } from 'react';

export default function Abaut() {

    const [data, setData] = useState(1);

    return (
        <section id="about" className="mb-24 2xl:mb-60 2xl:pt-36">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
                <Image src={foto} alt="mi foto" />

                <div className="mt-4 md:mt-0 text-left flex flex-col h-full bg-[#181818] rounded-lg p-4 2xl:p-8 2xl:w-full 2xl:h-full">
                    <h2 className="text-4xl font-bold text-white mb-4 2xl:text-6xl">
                        About Me
                    </h2>
                    <p className=" text-slate-100 text-base md:text-m 2xl:text-xl 2xl:mb-2">
                        I'm Valentín, Dedicated Full Stack Web Developer boasting 2 years of practical experience in Node.js, React, Next.js, Nest.js, ExpressJs, and Databases, with Demonstrated success in developing efficient web applications and designing robust RESTful APIs.
                    </p>
                    <div className="flex flex-row mt-8 lg:justify-start justify-center 2xl:text-2xl">
                        <button onClick={() => setData(1)} className="mr-3 font-semibold hover:text-white text-white">
                            SKILLS
                            {data === 1 ? <div className="h-0.5 bg-[#3fcb7c] mt-1 mr-3" style={{ width: "calc(100% - 0.75rem)" }}></div> :
                                <div className="h-0.5 bg-[#181818] mt-1 mr-3" style={{ width: "calc(100% - 0.75rem)" }}></div>}
                        </button>
                        <button onClick={() => setData(2)} className="mr-3 font-semibold hover:text-white text-white">
                            EXPERIENCE
                            {data === 2 ? <div className="h-0.5 bg-[#3fcb7c] mt-1 mr-3" style={{ width: "calc(100% - 0.75rem)" }}></div> :
                                <div className="h-0.5 bg-[#181818] mt-1 mr-3" style={{ width: "calc(100% - 0.75rem)" }}></div>}
                        </button>
                        <button onClick={() => setData(3)} className="mr-3 font-semibold hover:text-white text-white">
                            EDUCATION
                            {data === 3 ? <div className="h-0.5 bg-[#3fcb7c] mt-1 mr-3" style={{ width: "calc(100% - 0.75rem)" }}></div> :
                                <div className="h-0.5 bg-[#181818] mt-1 mr-3" style={{ width: "calc(100% - 0.75rem)" }}></div>}
                        </button>
                    </div>
                    {data === 1 && <div className="grid grid-cols-3 text-xs lg:text-lg sm:text-s 2xl:mt-6 mt-4">
                        <ul>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                React.Js
                                <Image
                                    src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FReactJs.webp&w=32&q=75"
                                    alt="icon"
                                    width={25} // Ancho de la imagen
                                    height={25} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                Next.Js
                                <Image
                                    src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FNextJs.webp&w=32&q=75"
                                    alt="icon"
                                    width={25} // Ancho de la imagen
                                    height={25} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                Node.Js
                                <Image
                                    src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FNodeJs.webp&w=32&q=75"
                                    alt="icon"
                                    width={25} // Ancho de la imagen
                                    height={25} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                Express.Js
                                <Image
                                    src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FExpressJs.webp&w=32&q=75"
                                    alt="icon"
                                    width={30} // Ancho de la imagen
                                    height={30} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                Tailwind
                                <Image
                                    src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FTailwind.webp&w=32&q=75"
                                    alt="icon"
                                    width={25} // Ancho de la imagen
                                    height={25} // Altura de la imagen
                                />
                            </li>
                        </ul>
                        <ul>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                JavaScript
                                <Image
                                    src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FJavaScript.webp&w=32&q=75"
                                    alt="icon"
                                    width={30} // Ancho de la imagen
                                    height={30} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                TypeScript
                                <Image
                                    src="https://www.svgrepo.com/show/374146/typescript-official.svg"
                                    alt="icon"
                                    width={30} // Ancho de la imagen
                                    height={30} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                MongoDB
                                <Image
                                    src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FMongoDB.webp&w=32&q=75"
                                    alt="icon"
                                    width={30} // Ancho de la imagen
                                    height={30} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                HTML5
                                <Image
                                    src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FHTML5.webp&w=32&q=75"
                                    alt="icon"
                                    width={30} // Ancho de la imagen
                                    height={30} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                CSS
                                <Image
                                    src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FCSS.webp&w=32&q=75"
                                    alt="icon"
                                    width={30} // Ancho de la imagen
                                    height={30} // Altura de la imagen
                                />
                            </li>
                        </ul>
                        <ul>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                SASS
                                <Image
                                    src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FSASS.webp&w=32&q=75"
                                    alt="icon"
                                    width={30} // Ancho de la imagen
                                    height={30} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                SQL
                                <Image
                                    src="https://www.stonebranch.com/integration-hub/media/3c/64/66/1636642258/Stonebranch_SQL_Vendor_Product_Logo.svg"
                                    alt="icon"
                                    width={50} // Ancho de la imagen
                                    height={50} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                MYSQL
                                <Image
                                    src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                                    alt="icon"
                                    width={55} // Ancho de la imagen
                                    height={55} // Altura de la imagen
                                />
                            </li>
                            <li className="xl:pb-1 flex items-center 2xl:text-2xl 2xl:pb-2 text-slate-100">
                                Postgresql
                                <Image
                                    src="https://www.svgrepo.com/show/303301/postgresql-logo.svg"
                                    alt="icon"
                                    width={35} // Ancho de la imagen
                                    height={35} // Altura de la imagen
                                />
                            </li>
                        </ul>
                    </div>}
                    {data === 2 && <div className='pt-4'>
                        <p className='text-slate-100'>
                            <span className="font-extrabold  bg-clip-text gradient-background text-[#3fcb7c]"> . </span>
                            Proyecto ERM worckflow</p>
                        <p className='text-slate-100'>actualmente en produccion</p>
                        <p className='text-slate-100'>
                            <span className="font-extrabold  bg-clip-text gradient-background text-[#3fcb7c]"> . </span>
                            Proyecto CRM gestion de clientes</p>
                        <p className='text-slate-100'>actualmente en produccion</p>
                    </div>}
                    {data === 3 && <div className='mt-4'>
                      <p className='text-white '>
                      <span className="font-extrabold  bg-clip-text gradient-background text-[#3fcb7c]"> . </span>
                        Cursando la carrera de Ing sistemas</p>
                      <p className='text-white '>en la Universidad Tecnológica Perú - UTP</p>   
                        </div>}
                </div>
            </div>
        </section>
    )
} 