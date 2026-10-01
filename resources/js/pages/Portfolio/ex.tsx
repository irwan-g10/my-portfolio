<section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
      {/* Background Radial Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Kolom Kiri: Teks & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              <span>Available for new projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Building Web Apps with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400">
                Modern Stack
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Saya mengembangkan aplikasi web yang responsif, terstruktur, dan berkinerja tinggi menggunakan React, Inertia.js, dan Tailwind CSS.
            </p>

            {/* Buttons / CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-600/30 text-center"
              >
                Lihat Portofolio
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold transition-all duration-200 text-center"
              >
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Visual Card / Dashboard Code Overlay */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-sky-500 opacity-30 blur-lg" />
              
              {/* Main Card */}
              <div className="relative rounded-2xl bg-slate-800/80 border border-slate-700/80 p-6 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-2 mb-4 border-b border-slate-700/60 pb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2">HeroSection.jsx</span>
                </div>
                
                <pre className="text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span> = &#123;{'\n'}
                    {'  '}name:{' '}
                    <span className="text-emerald-400">'Fullstack Dev'</span>,{'\n'}
                    {'  '}skills: [
                    <span className="text-emerald-400">'React'</span>,{' '}
                    <span className="text-emerald-400">'Laravel'</span>,{' '}
                    <span className="text-emerald-400">'Tailwind'</span>],{'\n'}
                    {'  '}status:{' '}
                    <span className="text-emerald-400">'Ready to Code'</span>
                    {'\n'}&#125;;
                  </code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>