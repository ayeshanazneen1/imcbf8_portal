import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import CopyrightFooter from "./components/CopyrightFooter";
import PrincipalMessage from "./components/PrincipalMessage";
import Team from "./components/Team";
import FacilitiesCollage from "./components/FacilitiesCollage";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PrincipalMessage/>
      <Team />
      <FacilitiesCollage />
      <Testimonials />
      <Footer />
      <CopyrightFooter />
    </div>
  );
}