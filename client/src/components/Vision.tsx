import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#f5f0e8]">
      {/* Diagonal top from dark section */}
      <div
        className="absolute top-0 left-0 right-0 h-20"
        style={{
          background: "#1a1a18",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" ref={ref}>
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <p
              className="text-[#D4A017] text-xs tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Aligned with Vision 2030
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2A2A] leading-tight mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Powering the Kingdom's{" "}
              <span className="gold-text">Mining Transformation</span>
            </h2>

            <div className="space-y-5 text-[#5A5550] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              <p className="text-base lg:text-lg">
                Saudi Arabia's Vision 2030 has identified mining as the third pillar of
                the national economy. With mineral resources estimated by the Ministry of
                Industry and Mineral Resources at $2.5 trillion (over 9 trillion riyals) —
                a near-doubling of earlier estimates — the Kingdom is rapidly building the
                infrastructure, regulations, and partnerships needed to unlock this potential.
              </p>
              <p className="text-base lg:text-lg">
                MDSE was purpose-built for this moment. We understand that realizing the
                mining vision requires more than equipment and expertise — it requires a
                trusted intermediary who can bridge the gap between international
                capabilities and local requirements, ensuring that every project
                contributes to the Kingdom's long-term economic diversification.
              </p>
            </div>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 mt-8 text-[#D4A017] font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Partner With Us
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Right: Key figures */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { figure: "$2.5T", label: "Mineral Resources Estimated by MIMR (SAR 9.4T)" },
              { figure: "3rd", label: "Pillar of Saudi Economy (Vision 2030)" },
              { figure: "5,000+", label: "Mining Licences Targeted by 2030" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="p-6 bg-white rounded-sm border border-[#D4A017]/10 shadow-sm"
              >
                <div
                  className="text-3xl lg:text-4xl font-bold gold-text mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.figure}
                </div>
                <p
                  className="text-[#8A8278] text-sm uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
