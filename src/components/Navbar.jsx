import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["About", "Capabilities", "Industries", "Leadership", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-purple-100 transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-purple-900/10" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <img
            src="/images/logo.png"
            alt="Trivexa Logo"
            className="h-30 w-auto object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-gray-500 hover:text-purple-700 transition-colors duration-200 no-underline"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-purple-800 hover:bg-purple-700 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5 no-underline"
          >
            Get a Consultation
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl bg-transparent border-none cursor-pointer text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-purple-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 hover:text-purple-700 no-underline"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-purple-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg text-center no-underline"
            onClick={() => setOpen(false)}
          >
            Get a Consultation
          </a>
        </div>
      )}
    </nav>
  );
}




