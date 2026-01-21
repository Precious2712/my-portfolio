'use client';

import { Contact } from "@/components/portfolio-comp/contact"
import { Header } from "@/components/portfolio-comp/header";
import { Hero } from "@/components/portfolio-comp/hero";
import { Projects } from "@/components/portfolio-comp/projects";
import { About } from "@/components/portfolio-comp/about";
import { Skills } from "@/components/portfolio-comp/footer";
import { CurrentFocus } from "@/components/portfolio-comp/current-focus";
// import { Skills } from "@/components/portfolio-comp/skills";


export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <About />
        <CurrentFocus />
        <Projects />
        <Contact />
      </main>
      <Skills />
    </>
  )
}
