// import { companyData } from "../data/companyData";

// export default function Footer() {
//   return (
//     <footer className="px-6 py-12" style={{ background: "#1E1E2E" }}>
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">

//         {/* Left */}
//         <div>
//           <div className="font-black text-sm text-white tracking-widest mb-1">
//             {companyData.company.fullName.toUpperCase()}
//           </div>
//           <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
//             {companyData.company.tagline}
//           </div>
//         </div>

//         {/* Right */}
//         <div className="text-xs text-right" style={{ color: "rgba(255,255,255,0.35)" }}>
//           © {new Date().getFullYear()} {companyData.company.fullName}<br />
//           All rights reserved.
//         </div>

//       </div>
//     </footer>
//   );
// }


import { companyData } from "../data/companyData";

export default function Footer() {
  return (
    <footer style={{ background: "#140C28" }}>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1 — Brand */}
          <div>
            {/* <img
              src="/images/logo.png"
              alt="Trivexa Logo"
              className="h-50 w-auto object-contain rounded-lg mb-4 "
            /> */}
            <p className="text-xs leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
              {companyData.company.tagline}
            </p>
            {/* Social / trust badges */}
            <div className="flex items-center gap-2">
              {["ISO", "CCNA", "AI"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs font-black px-2.5 py-1 rounded-md"
                  style={{ background: "rgba(74,37,128,0.4)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(107,59,175,0.3)" }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-4 h-0.5" style={{ background: "#F47B20" }} />
              <span className="text-xs font-black tracking-widest uppercase" style={{ color: "#F47B20" }}>Quick Links</span>
            </div>
            <div className="flex flex-col gap-3">
              {["About", "Capabilities", "Industries", "Leadership", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm no-underline transition-colors duration-200 flex items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#F47B20"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                >
                  <span style={{ color: "rgba(244,123,32,0.5)", fontSize: 10 }}>▶</span>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-4 h-0.5" style={{ background: "#F47B20" }} />
              <span className="text-xs font-black tracking-widest uppercase" style={{ color: "#F47B20" }}>Corporate Office</span>
            </div>

            <div className="flex flex-col gap-4">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs mt-0.5"
                  style={{ background: "rgba(74,37,128,0.4)", color: "#F47B20" }}
                >
                  📍
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Office No. 406, Foundation Tower,<br />
                  Sector-11, CBD Belapur,<br />
                  Navi Mumbai – 400614
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs"
                  style={{ background: "rgba(74,37,128,0.4)", color: "#F47B20" }}
                >
                  ✉
                </div>
                <a
                  href="mailto:sales@trivexa.co.in"
                  className="text-xs no-underline transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#F47B20"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
                >
                  sales@trivexa.co.in
                </a>
              </div>

              {/* Phone */}
              {/* <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs"
                  style={{ background: "rgba(74,37,128,0.4)", color: "#F47B20" }}
                >
                  📞
                </div>
                <a
                  href="tel:+919665035299"
                  className="text-xs no-underline transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#F47B20"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
                >
                  +91 96650 35299
                </a>
              </div> */}

              {/* Website */}
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs"
                  style={{ background: "rgba(74,37,128,0.4)", color: "#F47B20" }}
                >
                  🌐
                </div>
                <a
                  href="https://www.trivexa.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs no-underline transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#F47B20"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
                >
                  www.trivexa.co.in
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(107,59,175,0.2)" }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-xs font-bold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
            {companyData.company.fullName}
          </div>
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            © {new Date().getFullYear()} All rights reserved. Designed with precision.
          </div>
        </div>
      </div>

    </footer>
  );
}