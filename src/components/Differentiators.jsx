import { companyData } from "../data/companyData";

export default function Differentiators() {
  return (
    <section id="differentiators" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-0.5 bg-orange-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Why Choose Us</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-4">
          Our <span className="text-purple-800">Differentiators</span>
        </h2>
        <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-14">
          What sets Trivexa apart in delivering intelligent security solutions.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {companyData.differentiators.map((d, i) => (
            <div
              key={i}
              className="p-7 rounded-xl border border-purple-100 bg-white hover:shadow-lg hover:shadow-purple-900/8 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="text-xs font-black tracking-widest text-orange-500 mb-2.5">
                0{i + 1}
              </div>
              <div className="font-black text-sm text-gray-900 mb-2">{d.title}</div>
              <div className="text-sm text-gray-500 leading-relaxed">{d.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}