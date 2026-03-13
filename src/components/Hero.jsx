import { companyData } from "../data/companyData";

const stats = [
  { num: "50+", label: "Projects Executed" },
  { num: "3", label: "Core Domains" },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Full background image */}
      <img src="/images/cctv-install.jpeg" alt="CCTV Installation" className="absolute inset-0 w-full h-full object-cover" />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(20,12,40,0.95) 0%, rgba(30,20,50,0.82) 55%, rgba(74,37,128,0.45) 100%)" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(74,37,128,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(74,37,128,0.12) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Orange glow */}
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(244,123,32,0.2) 0%, transparent 70%)", bottom: 0, left: -50 }} />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6" style={{ background: "rgba(244,123,32,0.15)", border: "1px solid rgba(244,123,32,0.3)", color: "#FF9A4D" }}>
            <span style={{ color: "#F47B20", fontSize: 8 }}>●</span>
            Enterprise Security Solutions
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight mb-5">
            Intelligent<br />Security for the<br /><span style={{ color: "#F47B20" }}>Modern Enterprise</span>
          </h1>

          <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: "rgba(255,255,255,0.65)" }}>
            {companyData.company.tagline}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="px-7 py-3.5 rounded-lg font-bold text-sm text-white no-underline transition-all duration-200 hover:-translate-y-0.5" style={{ background: "#F47B20", boxShadow: "0 4px 20px rgba(244,123,32,0.4)" }}>
              Get a Free Consultation
            </a>
            <a href="#capabilities" className="px-7 py-3.5 rounded-lg font-semibold text-sm text-white no-underline transition-all duration-200 hover:bg-white/10" style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
              Our Capabilities →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-12 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {stats.map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-white leading-none mb-1">
                  {s.num.replace("+", "")}<span style={{ color: "#F47B20" }}>{s.num.includes("+") ? "+" : ""}</span>
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — control room image card */}
        <div className="hidden lg:block relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/60" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            <img src="/images/control-room.jpeg" alt="Security Control Room" className="w-full h-80 object-cover" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl px-5 py-4 flex items-center gap-3" style={{ background: "rgba(20,12,40,0.92)", border: "1px solid rgba(74,37,128,0.4)", backdropFilter: "blur(12px)" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg" style={{ background: "#F47B20" }}>◈</div>
              <div>
                <div className="font-bold text-sm text-white">24/7 Monitoring & Response</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>AI-powered command & control center</div>
              </div>
            </div>
          </div>
          {/* <div className="absolute -top-4 -right-4 rounded-xl px-5 py-3 text-center" style={{ background: "linear-gradient(135deg, #4A2580, #6B3BAF)", boxShadow: "0 8px 32px rgba(74,37,128,0.5)" }}>
            <div className="text-2xl font-black text-white leading-none">10<span style={{ color: "#F47B20" }}>+</span></div>
            <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.6)" }}>Years</div>
          </div> */}
        </div>

      </div>
    </section>
  );
}