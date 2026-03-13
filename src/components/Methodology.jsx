import { companyData } from "../data/companyData";

export default function Methodology() {
  return (
    <section id="methodology" className="py-24 px-6 relative overflow-hidden" style={{ background: "#1E1E2E" }}>
      {/* Subtle background image */}
      <img src="/images/cctv-install.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
      <div className="absolute inset-0" style={{ background: "rgba(20,12,40,0.85)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-0.5 bg-orange-400" />
          <span className="text-xs font-bold tracking-widest uppercase text-orange-400">How We Work</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black leading-tight tracking-tight mb-4 text-white">
          Execution <span style={{ color: "#F47B20" }}>Methodology</span>
        </h2>
        <p className="text-base leading-relaxed max-w-xl mb-14" style={{ color: "rgba(255,255,255,0.5)" }}>
          A structured, proven process from first consultation to long-term support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden" style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}>
          {companyData.methodology.map((s, i) => (
            <div
              key={i}
              className="relative p-8 overflow-hidden cursor-default transition-all duration-200"
              style={{ background: "#2A2A3E" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(74,37,128,0.45)"}
              onMouseLeave={e => e.currentTarget.style.background = "#2A2A3E"}
            >
              <div className="absolute top-4 right-5 font-black leading-none select-none pointer-events-none" style={{ fontSize: "3rem", color: "rgba(244,123,32,0.15)" }}>{s.step}</div>
              <div className="w-8 h-0.5 rounded-full mb-4 mt-8" style={{ background: "#F47B20" }} />
              <div className="font-black text-sm text-white relative z-10">{s.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}