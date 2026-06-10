import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Drill,
  Scale,
  Activity,
  FlaskConical,
  Brain,
  HardHat,
  Users,
  Compass,
} from "lucide-react";

const DRILLING_IMG = `${import.meta.env.BASE_URL}images/drilling-services.webp`;
const SURVEY_IMG = `${import.meta.env.BASE_URL}images/field-operations.webp`;

const coreServices = [
  {
    icon: Drill,
    title: "Drilling Contracting",
    description:
      "End-to-end drilling services for mineral exploration and mining operations across Saudi Arabia. From diamond core drilling to reverse circulation, we deploy the right technology for every geological challenge.",
    image: DRILLING_IMG,
    featured: true,
  },
  {
    icon: Scale,
    title: "Legal & Operational Support",
    description:
      "Comprehensive support for international service providers entering the Saudi mining market. We navigate regulatory requirements, licensing, and local compliance so our partners can focus on what they do best.",
    image: null,
    featured: false,
  },
];

const expandingServices = [
  {
    icon: Activity,
    title: "Geophysical Services",
    description:
      "Contracting advanced geophysical survey services including seismic, magnetic, gravity, and electromagnetic methods for subsurface characterization and mineral target identification.",
    status: "Expanding",
  },
  {
    icon: FlaskConical,
    title: "Geochemical Services",
    description:
      "Soil, rock, and water geochemistry programs designed to identify and delineate mineral anomalies, supporting exploration decision-making with reliable analytical data.",
    status: "Expanding",
  },
  {
    icon: Brain,
    title: "AI-Assisted Data Integration",
    description:
      "Leveraging machine learning and AI to integrate multi-source geological, geophysical, and geochemical datasets, accelerating target generation and reducing exploration risk.",
    status: "Expanding",
  },
  {
    icon: HardHat,
    title: "Geotechnical Services",
    description:
      "Site investigation and geotechnical assessment services for mining infrastructure, tailings facilities, and slope stability analysis to support safe and efficient operations.",
    status: "Expanding",
  },
  {
    icon: Compass,
    title: "Geological Field Work",
    description:
      "Comprehensive geological mapping, core logging, structural analysis, and field sampling programs. We partner with specialized entities to deliver the large-scale field support that exploration projects demand.",
    status: "Expanding",
  },
  {
    icon: Users,
    title: "Manpower Services",
    description:
      "Skilled workforce solutions for mining and drilling projects — from geologists and engineers to field technicians and HSE professionals, all vetted for Saudi operations.",
    status: "Expanding",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-[#1a1a18] noise-overlay overflow-hidden"
      style={{ marginTop: "-5rem", paddingTop: "8rem" }}
    >
      {/* Diagonal top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(to right, oklch(0.97 0.006 80), oklch(0.94 0.008 80))",
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
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
            What We Offer
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our <span className="gold-text">Services</span>
          </h2>
          <p
            className="text-stone-400 text-base lg:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            From drilling operations to regulatory navigation, we provide the
            full spectrum of support that Saudi Arabia's mining sector demands.
          </p>
        </motion.div>

        {/* Core Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {coreServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group relative bg-[#242420] rounded-sm overflow-hidden border border-[#D4A017]/10 hover:border-[#D4A017]/30 transition-all duration-500"
            >
              {service.image && (
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#242420] via-[#242420]/30 to-transparent" />
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm gold-gradient flex items-center justify-center">
                    <service.icon className="text-[#1a1a18]" size={20} />
                  </div>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-[#D4A017] font-semibold px-2 py-1 border border-[#D4A017]/30 rounded-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Core Service
                  </span>
                </div>
                <h3
                  className="text-xl lg:text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-stone-400 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanding Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[1px] gold-gradient" />
            <p
              className="text-stone-500 text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Expanding Capabilities
            </p>
            <div className="flex-1 h-[1px] bg-[#D4A017]/10" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expandingServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="group p-6 bg-[#242420]/60 rounded-sm border border-[#D4A017]/5 hover:border-[#D4A017]/20 hover:bg-[#242420] transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-9 h-9 rounded-sm bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A017]/20 transition-colors">
                  <service.icon className="text-[#D4A017]" size={18} />
                </div>
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-stone-500 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Geophysics feature image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 relative rounded-sm overflow-hidden"
        >
          <img
            src={SURVEY_IMG}
            alt="Geophysical survey in the Saudi Arabian desert"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a18]/80 via-[#1a1a18]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 lg:p-12">
            <p
              className="text-[#D4A017] text-xs tracking-[0.2em] uppercase mb-2"
              style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
            >
              Field Operations
            </p>
            <h3
              className="text-2xl lg:text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From Desktop to Desert
            </h3>
            <p
              className="text-stone-300 mt-2 max-w-md text-sm lg:text-base"
              style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
            >
              Our services span the full exploration lifecycle — from initial
              data analysis through to boots-on-the-ground field operations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
