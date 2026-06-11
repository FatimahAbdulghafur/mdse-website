import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Globe, BookOpen } from "lucide-react";

const founders = [
  {
    name: "Mahdi AbuAli",
    role: "Co-Founder",
    credentials: "PhD, MSc",
    bio: "Senior energy executive and exploration geoscientist with 35+ years across oil, gas and mining. Former Saudi Aramco Senior Geological Consultant with a record of adding multi-million barrels of oil and several trillion cubic feet (Tcf) of gas to exploration portfolios. Led joint-venture programmes with international oil companies (IOCs) including Shell, TotalEnergies, Repsol, Sinopec, Eni and Lukoil. Recent leadership includes COO & VP at Raphael Energy Group and consultant/adviser to Halliburton, KOC and Axiom Exploration, expanding into mineral exploration and energy-transition technologies.",
    highlights: [
      { icon: GraduationCap, text: "PhD RWTH Aachen · MSc Colorado School of Mines" },
      { icon: Award, text: "Former Senior Geological Consultant, Saudi Aramco" },
      { icon: Globe, text: "JV Programmes: Shell, TotalEnergies, Repsol, Sinopec, Eni, Lukoil" },
      { icon: BookOpen, text: "Co-editor, AAPG Memoir #114 · US Patent Holder" },
    ],
    initial: "M",
  },
  {
    name: "Fatimah Abdulghafur",
    role: "Co-Founder & COO",
    credentials: "PhD Candidate, MSc",
    bio: "A specialist in exploration geophysics with expertise spanning seismic data analysis and geomagnetism, Fatimah served as Principal Specialist Geophysicist at Ma'aden, Saudi Arabia's national mining company, before dedicating herself to MDSE. She is a PhD candidate at Macquarie University, researching advanced multi-observable joint inversion methods. Previously, she worked as an Exploration Geophysicist at Fleet Space Technologies in Australia and as a Seismic Data Processing Engineer at CNPC. A speaker at the Future Minerals Forum 2026, GEOMIN, and AEGC, Fatimah brings cutting-edge technical knowledge and firsthand understanding of Saudi mining operations to MDSE.",
    highlights: [
      { icon: GraduationCap, text: "PhD Candidate, Macquarie University · Published Researcher" },
      { icon: Award, text: "Former Principal Specialist Geophysicist, Ma'aden" },
      { icon: Globe, text: "International Experience: Australia, China, Saudi Arabia" },
      { icon: BookOpen, text: "GEOMIN Committee Member · Speaker: FMF 2026, GEOMIN, AEGC" },
    ],
    initial: "F",
  },
];

export default function Founders() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="founders" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 40px,
            #D4A017 40px,
            #D4A017 41px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="text-[#D4A017] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Leadership
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2A2A] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meet the <span className="gold-text">Founders</span>
          </h2>
          <p
            className="text-[#8A8278] text-base lg:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Decades of combined experience across geoscience, exploration, and
            mining operations — now channeled into building a trusted mining
            services partner for Saudi Arabia.
          </p>
        </motion.div>

        {/* Founders grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-sm border border-[#D4A017]/10 shadow-lg shadow-black/5 overflow-hidden hover:shadow-xl hover:shadow-[#D4A017]/5 transition-all duration-500">
                {/* Header band */}
                <div className="relative h-3 gold-gradient" />

                <div className="p-8 lg:p-10">
                  {/* Name and role */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-sm gold-gradient flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-2xl font-bold text-[#1a1a18]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {founder.initial}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold text-[#2A2A2A]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {founder.name}
                      </h3>
                      <p
                        className="text-[#D4A017] text-sm font-semibold uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {founder.role}
                      </p>
                      <p
                        className="text-[#8A8278] text-xs mt-0.5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {founder.credentials}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p
                    className="text-[#5A5550] leading-relaxed mb-8 text-sm lg:text-base"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {founder.bio}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {founder.highlights.map((hl, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-sm bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <hl.icon className="text-[#D4A017]" size={14} />
                        </div>
                        <p
                          className="text-[#5A5550] text-sm"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {hl.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
