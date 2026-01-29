import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import EducationCertifications from "@/components/sections/EducationCertifications";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <EducationCertifications />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
