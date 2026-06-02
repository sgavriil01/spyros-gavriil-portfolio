import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-x-clip">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
