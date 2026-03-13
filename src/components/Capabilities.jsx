// import { companyData } from "../data/companyData";

// const capImages = [
//   "/images/control-room.jpeg",
//   "/images/access-control.jpeg",
//   "/images/cctv-install.jpeg",
// ];

// export default function Capabilities() {
//   return (
//     <section id="capabilities" className="py-24 px-6 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center gap-3 mb-3">
//           <div className="w-6 h-0.5 bg-orange-500" />
//           <span className="text-xs font-bold tracking-widest uppercase text-orange-500">What We Do</span>
//         </div>
//         <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-4">
//           Our <span className="text-purple-800">Capabilities</span>
//         </h2>
//         <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-14">
//           End-to-end solutions across surveillance, access control, and critical infrastructure for enterprise environments.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {companyData.capabilities.map((cap, i) => (
//             <div key={i} className="group bg-white border border-purple-100 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-900/10">
//               {/* Image */}
//               <div className="relative overflow-hidden h-48">
//                 <img
//                   src={capImages[i]}
//                   alt={cap.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(74,37,128,0.7) 0%, transparent 60%)" }} />
//                 <div className="absolute bottom-3 left-4">
//                   <div className="text-2xl">{cap.icon}</div>
//                 </div>
//                 {/* Top gradient bar */}
//                 <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ background: "linear-gradient(90deg, #4A2580, #F47B20)" }} />
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="font-black text-base text-gray-900 mb-4">{cap.title}</h3>
//                 <ul className="space-y-0">
//                   {cap.items.map((item, j) => (
//                     <li key={j} className="flex items-start gap-2.5 text-sm text-gray-500 py-2 border-b border-gray-50 last:border-none">
//                       <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "#F47B20" }}>—</span>
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import { useState, useEffect } from "react";

const companyData = {
  capabilities: [
    {
      title: "Surveillance Systems",
      icon: "📷",
      items: ["HD CCTV Installation", "Remote Monitoring", "AI-Powered Analytics", "Night Vision Systems"],
    },
    {
      title: "Access Control",
      icon: "🔐",
      items: ["Biometric Systems", "Smart Card Access", "Visitor Management", "Multi-Site Integration"],
    },
    {
      title: "Critical Infrastructure",
      icon: "🏗️",
      items: ["Control Room Design", "Network Security", "24/7 Support", "Compliance Auditing"],
    },
  ],
};

const capImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % companyData.capabilities.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="capabilities" className="py-24 px-6 bg-white">
      <style>{`
        .cap-card {
          transition: transform 0.55s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.55s ease;
        }
        .card-active {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 32px 64px rgba(74,37,128,0.22);
          z-index: 10;
          position: relative;
        }
        .card-inactive {
          transform: scale(0.97);
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-0.5 bg-orange-500" />
          <span className="text-xs font-bold tracking-widest uppercase text-orange-500">What We Do</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-4">
          Our <span className="text-purple-800">Capabilities</span>
        </h2>
        <p className="text-base text-gray-500 leading-relaxed max-w-xl mb-14">
          End-to-end solutions across surveillance, access control, and critical infrastructure for enterprise environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companyData.capabilities.map((cap, i) => (
            <div
              key={i}
              className={`cap-card bg-white border border-purple-100 rounded-2xl overflow-hidden ${
                i === activeIndex ? "card-active" : "card-inactive"
              }`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={capImages[i]}
                  alt={cap.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${i === activeIndex ? "scale-105" : "scale-100"}`}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(74,37,128,0.7) 0%, transparent 60%)" }} />
                <div className="absolute bottom-3 left-4">
                  <div className="text-2xl">{cap.icon}</div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-black text-base text-gray-900 mb-4">{cap.title}</h3>
                <ul className="space-y-0">
                  {cap.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-500 py-2 border-b border-gray-50 last:border-none">
                      <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "#F47B20" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}