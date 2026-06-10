import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const CONTACT_EMAIL = "info@mdse.sa";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[MDSE Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company || "—"}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client to send the inquiry…");
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Diagonal top */}
      <div
        className="absolute top-0 left-0 right-0 h-20"
        style={{
          background: "#f5f0e8",
          clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#D4A017] text-xs tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
          >
            Start a Conversation
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A2A2A] leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get in <span className="gold-text">Touch</span>
          </h2>
          <p
            className="text-[#8A8278] text-base lg:text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", fontWeight: 300 }}
          >
            Whether you are a Saudi mining company seeking drilling services or an
            international provider looking to enter the Kingdom, we are ready to
            discuss how MDSE can support your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3
                className="text-xl font-bold text-[#2A2A2A] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Reach Out Directly
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#D4A017]" size={18} />
                  </div>
                  <div>
                    <p
                      className="text-xs text-[#8A8278] uppercase tracking-wider mb-1"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                    >
                      Email
                    </p>
                    <p
                      className="text-[#2A2A2A] font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      info@mdse.sa
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#D4A017]" size={18} />
                  </div>
                  <div>
                    <p
                      className="text-xs text-[#8A8278] uppercase tracking-wider mb-1"
                      style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                    >
                      Location
                    </p>
                    <p
                      className="text-[#2A2A2A] font-medium"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative gold line */}
            <div className="w-full h-[1px] gold-gradient opacity-30" />

            <div>
              <p
                className="text-[#5A5550] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We respond to all inquiries within 48 hours. For urgent matters
                related to active drilling operations, please indicate so in
                your message subject.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs text-[#8A8278] uppercase tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D4A017]/15 rounded-sm text-[#2A2A2A] placeholder-[#8A8278]/50 focus:border-[#D4A017]/40 focus:outline-none transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs text-[#8A8278] uppercase tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D4A017]/15 rounded-sm text-[#2A2A2A] placeholder-[#8A8278]/50 focus:border-[#D4A017]/40 focus:outline-none transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs text-[#8A8278] uppercase tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D4A017]/15 rounded-sm text-[#2A2A2A] placeholder-[#8A8278]/50 focus:border-[#D4A017]/40 focus:outline-none transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs text-[#8A8278] uppercase tracking-wider mb-2"
                    style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D4A017]/15 rounded-sm text-[#2A2A2A] placeholder-[#8A8278]/50 focus:border-[#D4A017]/40 focus:outline-none transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs text-[#8A8278] uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}
                >
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-[#D4A017]/15 rounded-sm text-[#2A2A2A] placeholder-[#8A8278]/50 focus:border-[#D4A017]/40 focus:outline-none transition-colors resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-[#1a1a18] font-semibold text-sm uppercase tracking-wider rounded-sm hover:opacity-90 transition-opacity"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <Send size={16} />
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
