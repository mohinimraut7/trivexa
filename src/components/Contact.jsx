const formFields = [
  { label: "Full Name", placeholder: "Your full name", type: "text" },
  { label: "Company / Organization", placeholder: "Your organization", type: "text" },
  { label: "Email Address", placeholder: "your@email.com", type: "email" },
  { label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel" },
];

const contactItems = [
  { icon: "📍", label: "Headquarters", value: "Trivexa Intelligence Solutions India LLP" },
  { icon: "🔒", label: "Specialization", value: "Industrial & Enterprise Security" },
  { icon: "⚡", label: "Response Time", value: "Within 24 hours" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-0.5 bg-orange-500" />
              <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Get In Touch</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight tracking-tight mb-5">
              Ready to Secure<br />
              <span className="text-purple-800">Your Premises?</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-10">
              Get in touch with our team to discuss your security requirements. We provide a free consultation and site assessment for all new projects.
            </p>

            <div className="flex flex-col gap-5">
              {contactItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-base flex-shrink-0 bg-purple-800 text-white">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</div>
                    <div className="text-sm font-semibold text-gray-800">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-10 shadow-xl shadow-purple-900/8 border border-purple-100">
            <h3 className="font-black text-lg text-gray-900 mb-6">Request a Consultation</h3>

            {formFields.map((f, i) => (
              <div key={i} className="mb-4">
                <label className="block text-xs font-bold text-gray-700 mb-1.5">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 rounded-lg text-sm text-gray-800 border border-purple-100 bg-white outline-none transition-all duration-200 placeholder-gray-300 focus:border-purple-700 focus:ring-2 focus:ring-purple-100"
                />
              </div>
            ))}

            <div className="mb-5">
              <label className="block text-xs font-bold text-gray-700 mb-1.5">Message / Requirements</label>
              <textarea
                placeholder="Describe your security requirements..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-sm text-gray-800 border border-purple-100 bg-white outline-none transition-all duration-200 placeholder-gray-300 focus:border-purple-700 focus:ring-2 focus:ring-purple-100 resize-y"
              />
            </div>

            <button
              className="w-full py-3.5 rounded-lg font-black text-sm text-white tracking-wide transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#4A2580" }}
              onMouseEnter={e => e.currentTarget.style.background = "#6B3BAF"}
              onMouseLeave={e => e.currentTarget.style.background = "#4A2580"}
            >
              Send Message →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}