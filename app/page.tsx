"use client"

import Abaut from "@/components/abaut"
import Contact from "@/components/contac"
import Header from "@/components/header"
import Perfil from "@/components/perfil"
import Proyectos from "@/components/proyects"


export default function Home() {

  return (
    <main className="bg-[#121212]">
      <Header/>
      <Perfil/>
      <Abaut/>
      <Proyectos/>
      <Contact/>
    </main>
  )
}
