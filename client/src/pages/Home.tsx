/*
 * MDSE Website — "Geological Strata" Design
 * 
 * Design Philosophy: Layered earth aesthetic inspired by geological cross-sections.
 * Color Palette: Vibrant gold (#D4A017) with bright highlights (#F5D060) + deep charcoal (#2A2A2A) + warm stone grey (#8A8278)
 * Typography: Playfair Display (display) + Source Sans 3 (body)
 * Layout: Full-width horizontal bands with diagonal strata dividers
 */

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Founders from "@/components/Founders";
import WhyMDSE from "@/components/WhyMDSE";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Founders />
      <WhyMDSE />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}
