import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </main>
  )
}
