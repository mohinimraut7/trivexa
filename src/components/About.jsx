import { companyData } from "../data/companyData";

const highlights = [
  { icon: "◈", title: "Scalable Systems", desc: "Solutions that scale with your organization's growth and complexity." },
  { icon: "◉", title: "Technology-Led", desc: "Cutting-edge AI and IP-based systems for maximum operational visibility." },
  { icon: "▲", title: "Compliance-Ready", desc: "Deployments built to meet industry regulations and security standards." },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-0.5 bg-orange-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Corporate Overview</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-5">
              Securing What <span className="text-purple-800">Matters Most</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-10">
              {companyData.company.fullName} is a professionally managed, technology-focused organization delivering advanced security, surveillance, and intelligent infrastructure solutions across industrial and enterprise environments.
            </p>
            <div className="flex flex-col gap-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-purple-100 bg-white hover:shadow-md hover:shadow-purple-900/5 transition-shadow duration-200">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0 bg-purple-50 text-purple-800">{h.icon}</div>
                  <div>
                    <div className="font-bold text-sm text-gray-900 mb-0.5">{h.title}</div>
                    <div className="text-sm text-gray-500">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stacked images + quote */}
          <div className="flex flex-col gap-5">
            {/* Meeting image */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/meeting.jpeg" alt="Security Consultation" className="w-full h-64 object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(74,37,128,0.6) 0%, transparent 50%)" }} />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: "rgba(244,123,32,0.9)" }}>
                  Strategic Consultation
                </span>
              </div>
            </div>

            {/* Quote card */}
            <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: "#4A2580" }}>
              <div className="absolute font-black leading-none pointer-events-none select-none" style={{ top: -20, left: 16, fontSize: "8rem", color: "rgba(255,255,255,0.06)", fontFamily: "serif" }}>"</div>
              <p className="text-base font-semibold text-white leading-relaxed relative z-10 mb-4">"{companyData.company.quote}"</p>
              <p className="text-xs italic" style={{ color: "rgba(255,255,255,0.55)" }}>— {companyData.company.quoteAuthor}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}