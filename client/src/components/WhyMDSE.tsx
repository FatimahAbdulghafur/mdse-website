import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Handshake, MapPin, Zap, FileCheck, Globe2 } from "lucide-react";

const PARTNERSHIP_IMG = `${import.meta.env.BASE_URL}images/partnership.webp`;

const reasons = [
  {
    icon: MapPin,
    title: "Saudi-Based, Saudi-Focused",
    description:
      "We are rooted in the Kingdom with deep understanding of local geology, regulations, and business culture.",
  },
  {
    icon: Shield,
    title: "Regulatory Navigation",
    description:
      "We handle licensing, compliance, and legal frameworks so international partners can operate with confidence.",
  },
  {
    icon: Handshake,
    title: "Dual-Side Partnership",
    description:
      "We serve both local clients and international providers, creating a balanced ecosystem where both sides benefit.",
  },
  {
    icon: Zap,
    title: "Technical Excellence",
    description:
      "Our leadership and advisors bring world-class geoscience credentials from Saudi Aramco, the Kingdom's mining sector, and leading international institutions.",
  },
  {
    icon: FileCheck,
    title: "Contract Management",
    description:
      "We manage the full contract lifecycle — from negotiation and execution to performance monitoring and closeout.",
  },
  {
    icon: Globe2,
    title: "International Network",
    description:
      "Connections across Australia, Europe, Asia, and the Middle East give us access to established international service providers.",
  },
];

export default function WhyMDSE() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-mdse"
      className="relative py-24 lg:py-32 bg-[#1a1a18] noise-overlay overflow-hidden"
      style={{ marginTop: "-5rem", paddingTop: "8rem" }}
    >
      {/* Diagonal top */}
      <div
        className="absolute top-0 left-0 right-0 h-20"
        style={{
          background: "linear-gradient(to right, oklch(0.97 0.006 80), oklch(0.94 0.008 80))",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Top image banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-sm overflow-hidden mb-20"
        >
          <img
            src={PARTNERSHIP_IMG}
            alt="Modern corporate meeting room overlooking a mining landscape"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a18]/90 via-[#1a1a18]/60 to-[#1a1a18]/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 lg:px-12 max-w-xl">
              <p
                className="text-[#D4A017] text-xs tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
              >
                Our Advantage
              </p>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Why Choose{" "}
                <span className="gold-text">MDSE</span>
              </h2>
              <p
                className="text-stone-400 mt-4 text-sm lg:text-base"
                style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
              >
                We are not just a service provider — we are the connective tissue
                between ambition and execution in Saudi mining.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group relative"
            >
              <div className="p-8 bg-[#242420]/60 rounded-sm border border-[#D4A017]/5 hover:border-[#D4A017]/20 transition-all duration-500 h-full">
                {/* Gold top accent */}
                <div className="absolute top-0 left-8 right-8 h-[2px] gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-12 h-12 rounded-sm bg-[#D4A017]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4A017]/20 transition-colors">
                  <reason.icon className="text-[#D4A017]" size={22} />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-stone-500 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
