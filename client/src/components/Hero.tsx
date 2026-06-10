import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HERO_BG = `${import.meta.env.BASE_URL}images/hero-bg.webp`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Mining drilling operations in the Arabian desert at golden hour"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Gold tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#D4A017]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Gold accent line */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-[2px] gold-gradient" />
          </div>

          <p
            className="text-[#D4A017] text-sm sm:text-base tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Mining &amp; Drilling Services Establishment
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Bridging Expertise{" "}
          <span className="block mt-2">
            to the{" "}
            <span className="gold-text">Kingdom's</span>
          </span>
          <span className="block mt-2">Mineral Frontier</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
        >
          Drilling contracting for Saudi mining clients. Legal and operational
          support for international service providers. One seamless partnership.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-8 py-3.5 gold-gradient text-[#1a1a18] font-semibold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-[#D4A017]/50 text-[#D4A017] font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-[#D4A017]/10 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-[#D4A017]/60" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
