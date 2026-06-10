const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Founders", href: "#founders" },
  { label: "Why MDSE", href: "#why-mdse" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#111110] border-t border-[#D4A017]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="text-2xl font-bold tracking-wider gold-text"
                style={{ fontFamily: "var(--font-display)" }}
              >
                MDSE
              </span>
              <p
                className="text-stone-500 text-xs tracking-[0.15em] uppercase mt-1"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Mining & Drilling Services Establishment
              </p>
            </div>
            <p
              className="text-stone-600 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Bridging local ambition and global expertise in Saudi Arabia's
              mining sector.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs text-[#D4A017] uppercase tracking-[0.2em] font-semibold mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Navigation
            </h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="block text-stone-500 hover:text-[#D4A017] text-sm transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-xs text-[#D4A017] uppercase tracking-[0.2em] font-semibold mb-5"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Headquarters
            </h4>
            <p
              className="text-stone-500 text-sm leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Kingdom of Saudi Arabia
            </p>
            <p
              className="text-stone-600 text-sm mt-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              info@mdse.sa
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#D4A017]/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className="text-stone-700 text-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; {new Date().getFullYear()} Mining &amp; Drilling Services
            Establishment. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-6 h-[1px] gold-gradient" />
            <p
              className="text-stone-700 text-[10px] uppercase tracking-wider"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Saudi Arabia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
