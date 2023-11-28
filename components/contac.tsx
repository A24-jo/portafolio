"use client"
import { GrLinkedin } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
import { PiGithubLogoFill } from "react-icons/pi";


export default function Contact() {
    return (
        <section id="contact" className="flex items-center justify-center  p-4">
            <div className="z-10 p-6">
                <h5 className="text-xl font-bold text-white my-2  2xl:text-3xl">
                    Let's Connect
                </h5>
                <p className="text-[#ADB7BE] 2xl:text-xl mb-4 ">
                    "Te invito a explorar mi portafolio, donde podrás obtener una visión detallada de mi experiencia, habilidades y proyectos destacados. Estoy siempre abierto a nuevas oportunidades y valoro la colaboración profesional.

                    Si deseas discutir posibles colaboraciones, proyectos interesantes o simplemente quieres establecer contacto, puedes encontrarme en mi portafolio, así como a través de plataformas como Git, LinkedIn y WhatsApp. Mi compromiso es responder de manera pronta y constructiva.

                    ¡Aprecio tu interés y estoy ansioso por conectar contigo! No dudes en enviarme un mensaje a través de cualquiera de estas plataformas para iniciar una conversación significativa. ¡Hagamos cosas increíbles juntos!"
                </p>
                <div className="socials flex flex-row gap-2">
                    <a href="https://github.com/A24-jo/mychat" >
                        <PiGithubLogoFill size="40px" className="text-slate-50 hover:text-[#3fcb7c]" />
                    </a>
                    <a href="https://wa.me/+51922595604" >
                        <IoLogoWhatsapp size="40px" className="text-slate-50 hover:text-[#3fcb7c] " />
                    </a>
                    <a href="https://www.linkedin.com/in/24bravo-ramos/">
                        <GrLinkedin size="40px" className="text-slate-50 hover:text-[#3fcb7c] " />
                    </a>
                </div>
            </div>

            {/*  <div className="flex flex-col items-center justify-center  dark">
                <div className="w-full max-w-md rounded-lg shadow-md p-6">
                    <form className="flex flex-col">

                        <label className="text-slate-50" >Your E-Mail Address</label>
                        <input placeholder="YourEmail@google.com" className="bg-[#1d1c1c] text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-[#181818] focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />

                        <label className="text-slate-50"  >Subject</label>
                        <input placeholder="Just saying hi" className="bg-[#1d1c1c] text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-[#181818] focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="email" />

                        <label className="text-slate-50" > Message</label>
                        <textarea placeholder="Let's talk about..." className="bg-[#1d1c1c] text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-[#181818] focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" />

                        <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
 */}
        </section>
    )
}