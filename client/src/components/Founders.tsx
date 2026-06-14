import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Award,
  Globe,
  BookOpen,
  Cpu,
  Layers,
  Gauge,
  Zap,
} from "lucide-react";

const MAHDI_IMG = `${import.meta.env.BASE_URL}images/mahdi.jpg`;
const TOLUN_LOGO = `${import.meta.env.BASE_URL}images/tolun-icon.svg`;

const people = [
  {
    kind: "leader" as const,
    tag: "Leadership",
    name: "Mahdi AbuAli",
    role: "Founder, CEO & Owner",
    credentials: "PhD, MSc",
    image: MAHDI_IMG,
    logo: null,
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
    kind: "advisor" as const,
    tag: "Technology Advisor",
    name: "Tolun AI",
    role: "Agentic AI for Subsurface Intelligence",
    credentials: "Joint geophysical inversion · quantified uncertainty",
    image: null,
    logo: TOLUN_LOGO,
    bio: "A vertically integrated, agentic-AI company for mining. Tolun AI's platform turns drillhole and geophysical data into drill-ready 3D subsurface models — with uncertainty quantified, not assumed. Production AI agents wrap a deterministic, peer-reviewed inversion engine spanning gravity, magnetics, magnetotellurics, EM, and surface-wave methods, inverted jointly so each dataset constrains the others. As MDSE's technology advisor, Tolun AI brings this subsurface intelligence to the evaluation of targets, partners, and programmes in the Kingdom.",
    highlights: [
      { icon: Cpu, text: "Agentic AI over a peer-reviewed inversion engine" },
      { icon: Layers, text: "Joint inversion: gravity, magnetics, MT, EM, seismic" },
      { icon: Gauge, text: "Bayesian uncertainty — quantified, not assumed" },
      { icon: Zap, text: "Drill-ready 3D subsurface products in days" },
    ],
    initial: "T",
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
            Leadership &amp; Advisory
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2A2A] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Led by <span className="gold-text">Experience</span>
          </h2>
          <p
            className="text-[#8A8278] text-base lg:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Decades of geoscience, exploration, and mining leadership — backed by
            an independent technical advisor — channeled into building a trusted
            mining services partner for Saudi Arabia.
          </p>
        </motion.div>

        {/* Leadership & advisory grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
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
                    {person.logo ? (
                      <div className="w-20 h-20 rounded-sm bg-white flex items-center justify-center flex-shrink-0 ring-1 ring-[#D4A017]/20 p-1.5">
                        <img
                          src={person.logo}
                          alt={`${person.name} logo`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : person.image ? (
                      <div className="w-20 h-20 rounded-sm overflow-hidden flex-shrink-0 ring-1 ring-[#D4A017]/30">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-sm gold-gradient flex items-center justify-center flex-shrink-0">
                        <span
                          className="text-3xl font-bold text-[#1a1a18]"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {person.initial}
                        </span>
                      </div>
                    )}
                    <div>
                      <span
                        className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#8A8278] mb-1"
                        style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                      >
                        {person.tag}
                      </span>
                      <h3
                        className="text-2xl font-bold text-[#2A2A2A]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {person.name}
                      </h3>
                      <p
                        className="text-[#D4A017] text-sm font-semibold uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {person.role}
                      </p>
                      <p
                        className="text-[#8A8278] text-xs mt-0.5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {person.credentials}
                      </p>
                    </div>
                  </div>

                  {/* Bio */}
                  <p
                    className="text-[#5A5550] leading-relaxed mb-8 text-sm lg:text-base"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {person.bio}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {person.highlights.map((hl, j) => (
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
