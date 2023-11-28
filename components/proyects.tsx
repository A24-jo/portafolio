"use client"
import git from "../public/github.svg";
import eyes from "../public/eye.svg";
import Image from 'next/image';
import { useState } from "react";


export default function Proyectos() {

    const myProjects = [
        { imagen: "url('/miperfil.png')", name: "NextJs Portfolio", description: "My 2023 Portfolio built with NextJs", github: "https://github.com/A24-jo/portafolio", linkProyectos: "https://portafolio-a24-jo.vercel.app/" },
        { imagen: "url('/worflow.png')", name: "ERM workflow", description: "My 2023 workflow built with react", github: "https://github.com/A24-jo", linkProyectos: "https://workflow-pf.vercel.app/" },
        { imagen: "url('/dog.png')", name: "dog list", description: "My 2023 dog list built with react", github: "https://github.com/A24-jo/PI-Dogs-main-client", linkProyectos: "https://pi-dogs-main-client-1xr5-pyhs3d8m7-a24-jo.vercel.app/" },
        { imagen: "url('/chat.png')", name: "NextJs chat", description: "My 2023 chat built with NextJs", github: "https://github.com/A24-jo/mychat", linkProyectos: "https://mychat-woad-nine.vercel.app/" },
    ];

    const Personal = [
        { imagen: "url('/chat.png')", name: "NextJs chat", description: "My 2023 chat built with NextJs", github: "https://github.com/A24-jo/portafolio", linkProyectos: "https://mychat-woad-nine.vercel.app/" },
        { imagen: "url('/miperfil.png')", name: "NextJs Portfolio", description: "My 2023 Portfolio built with NextJs", github: "https://github.com/A24-jo", linkProyectos: "https://mychat-woad-nine.vercel.app/" },
    ]
    const [data, setData] = useState(myProjects);

    return (
        <section id="projects" className="2xl:pt-12">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 lg:mb-12">
            Mis proyectos
            </h2>
            <div className="text-[#ADB7BE] flex flex-row justify-center items-center gap-2 py-6">
                <button className="text-white border-[#3fcb7c] rounded-full border-2 px-6 py-3 text-xl" 
                    onClick={()=>setData(myProjects)}>Todo</button>
                <button  className="text-white border-[#3fcb7c] rounded-full border-2 px-6 py-3 text-xl"
                    onClick={()=>setData(Personal)}>Personal</button>
            </div>
            <div className="p-6">
                <ul className="grid md:grid-cols-3 gap-8 md-gap-12">
                    {data.map((project, index) => (
                        <li key={index} style={{ opacity: "1", transform: "none" }}>
                            <div className="h-52 rounded-t-xl relative group border-t border-l border-r border-[#3fcb7c] "
                                style={{ backgroundImage: `${project.imagen}`, backgroundSize: "cover" }}>
                                <div className="overlay items-center justify-center absolute top-0 left 0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl" >
                                    <a href={project.github} className="h-14 w-14 border-2 mr-8 relative rounded-full border-[#ADB7BE] hover:border-[#3fcb7c] group/link">
                                        <Image src={git} alt="git" className="icon icon-tabler icon-tabler-brand-github h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white text-[#ADB7BE]" />
                                    </a>
                                    <a href={project.linkProyectos} className="h-14 w-14 border-2 mr-8 relative rounded-full border-[#ADB7BE] hover:border-[#3fcb7c] group/link">
                                        <Image src={eyes} alt="git" className="icon icon-tabler icon-tabler-brand-github h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white text-[#ADB7BE]" />
                                    </a>
                                </div>
                            </div>
                            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 border border-[#3fcb7c]">
                                <div className="flex justify-between mb-1 border-[#ADB7BE] border-b-2 ">
                                    <h5 className="text-xl font-semibold mb-1">{project.name}</h5>
                                    <span className="flex flex-wrap">
                                        <Image
                                            src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FNextJs.webp&w=32&q=75"
                                            alt="icon"
                                            width={25} // Ancho de la imagen
                                            height={25} />
                                        <Image
                                            src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FTailwind.webp&w=32&q=75"
                                            alt="icon"
                                            width={25} // Ancho de la imagen
                                            height={25} />
                                        <Image
                                            src="https://valentinballesteros2023.vercel.app/_next/image?url=%2Fimages%2Ficons%2FHTML5.webp&w=32&q=75"
                                            alt="icon"
                                            width={25} // Ancho de la imagen
                                            height={25} />
                                    </span>
                                </div>
                                <p className="text-[#ADB7BE]">
                                    {project.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    )
}