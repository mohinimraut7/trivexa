import { companyData } from "../data/companyData";

export default function Industries() {
  return (
    <section id="industries" className="py-24 px-6" style={{ background: "#1E1E2E" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-0.5 bg-orange-400" />
          <span className="text-xs font-bold tracking-widest uppercase text-orange-400">Industries We Serve</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight mb-4 text-white">
          Trusted Across <span style={{ color: "#F47B20" }}>Every Sector</span>
        </h2>
        <p className="text-base leading-relaxed max-w-xl mb-10" style={{ color: "rgba(255,255,255,0.55)" }}>
          From manufacturing floors to government infrastructure, we deliver tailored security solutions.
        </p>

        {/* Photo strip */}
        <div className="grid grid-cols-3 gap-3 mb-12 rounded-2xl overflow-hidden">
          {[
            { src: "/images/visitor-mgmt.jpeg", label: "Smart Access" },
            { src: "/images/access-control.jpeg", label: "Perimeter Control" },
            { src: "/images/security-scan.jpeg", label: "Government & Compliance" },
          ].map((img, i) => (
            <div key={i} className="relative overflow-hidden h-44 group">
              <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,40,0.8) 0%, transparent 60%)" }} />
              <div className="absolute bottom-3 left-3">
                <span className="text-xs font-bold text-white">{img.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Industry chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {companyData.industries.map((ind, i) => (
            <div
              key={i}
              className="rounded-xl p-6 cursor-default transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(74,37,128,0.3)"; e.currentTarget.style.borderColor = "rgba(74,37,128,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
            >
              <div className="text-2xl mb-3" style={{ color: "#F47B20" }}>{ind.icon}</div>
              <div className="font-bold text-sm text-white leading-snug">{ind.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}