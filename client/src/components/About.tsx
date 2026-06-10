import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const STRATA_TEXTURE = `${import.meta.env.BASE_URL}images/strata-texture.webp`;

const stats = [
  { value: "35+", label: "Years of Senior Exploration Leadership" },
  { value: "4", label: "Continents of Working Experience" },
  { value: "8", label: "Drilling & Geoscience Service Lines" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Diagonal strata divider at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-[#1a1a18]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 100%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-[#D4A017] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Who We Are
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2A2A] leading-tight mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              A Saudi-Founded Bridge Between{" "}
              <span className="gold-text">Local Ambition</span> and{" "}
              <span className="gold-text">Global Expertise</span>
            </h2>

            <div className="space-y-5 text-[#5A5550] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              <p className="text-base lg:text-lg">
                Mining &amp; Drilling Services Establishment (MDSE) was founded to serve
                Saudi Arabia's rapidly expanding mining sector. As the Kingdom accelerates
                its mineral exploration under Vision 2030, the need for a trusted local
                partner that understands both the technical demands of drilling operations
                and the regulatory landscape has never been greater.
              </p>
              <p className="text-base lg:text-lg">
                We provide drilling contracting services directly to Saudi mining clients,
                while simultaneously offering legal and operational support to international
                service providers entering the Kingdom. Our role is to manage contracts and
                deliver a seamless experience for both sides — ensuring projects move
                forward efficiently, compliantly, and on schedule.
              </p>
            </div>

            {/* Gold accent line */}
            <div className="mt-10 w-24 h-[2px] gold-gradient" />
          </motion.div>

          {/* Right: Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Strata texture image */}
            <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-black/10">
              <img
                src={STRATA_TEXTURE}
                alt="Geological rock strata showing layered sedimentary formations"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18]/60 to-transparent" />
            </div>

            {/* Stats overlay */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-sm border border-[#D4A017]/15"
                >
                  <div
                    className="text-2xl lg:text-3xl font-bold gold-text mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[10px] lg:text-xs text-[#8A8278] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
