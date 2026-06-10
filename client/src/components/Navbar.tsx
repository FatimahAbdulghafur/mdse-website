import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Founders", href: "#founders" },
  { label: "Why MDSE", href: "#why-mdse" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#1a1a18]/95 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
          >
            <div className="flex flex-col">
              <span
                className="text-xl lg:text-2xl font-bold tracking-wider gold-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                MDSE
              </span>
              <span
                className={`text-[9px] lg:text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  scrolled ? "text-stone-400" : "text-white/60"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                Mining & Drilling
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className={`px-4 py-2 text-sm tracking-wide uppercase transition-colors duration-300 ${
                  scrolled
                    ? "text-stone-300 hover:text-[#D4A017]"
                    : "text-white/80 hover:text-[#D4A017]"
                }`}
                style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-stone-300" : "text-white/80"
            }`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#1a1a18]/98 backdrop-blur-md border-t border-[#D4A017]/20"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-stone-300 hover:text-[#D4A017] text-sm uppercase tracking-wide transition-colors"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
