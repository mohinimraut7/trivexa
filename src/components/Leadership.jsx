import { companyData } from "../data/companyData";

export default function Leadership() {
  const l = companyData.leadership;
  return (
    <section id="leadership" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-0.5 bg-orange-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Our Leadership</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-12">
          Driven by <span className="text-purple-800">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Profile Card */}
          <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-xl shadow-purple-900/10 border border-purple-100">
            <div className="px-8 pt-10 pb-8 text-center" style={{ background: "linear-gradient(135deg, #2D1650, #4A2580)" }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-white mx-auto mb-4" style={{ background: "linear-gradient(135deg, #F47B20, #FF9A4D)", boxShadow: "0 8px 24px rgba(244,123,32,0.4)" }}>
                {l.name[0]}
              </div>
              <div className="font-black text-xl text-white mb-1">{l.name}</div>
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{l.title}</div>
            </div>
            <div className="px-8 py-6 flex flex-wrap gap-2">
              {[l.cert, "Founder"].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full text-xs font-bold text-purple-800 border border-purple-200 bg-purple-50">
                  {tag}
                </span>
              ))}
            </div>
            {/* Meeting image below tags */}
            <div className="mx-6 mb-6 rounded-xl overflow-hidden">
              <img src="/images/meeting.jpeg" alt="Leadership in action" className="w-full h-36 object-cover" />
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3">
            <h3 className="font-black text-base text-gray-900 mb-4">Background & Experience</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">{l.bio}</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">{l.founded}, he has successfully executed projects for reputed organizations including:</p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {l.clients.map((c, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-gray-500 bg-white border border-purple-100">{c}</span>
              ))}
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-gray-400 bg-white border border-purple-100">& more leading clients</span>
            </div>

            {/* Security scan image
            <div className="rounded-2xl overflow-hidden shadow-md relative">
              <img src="/images/security-scan.jpeg" alt="Security Infrastructure" className="w-full h-52 object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,12,40,0.7) 0%, transparent 50%)" }} />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-sm">Enterprise Security Infrastructure</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}