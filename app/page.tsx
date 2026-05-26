import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative isolate overflow-hidden">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
