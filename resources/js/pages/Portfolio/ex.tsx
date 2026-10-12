<section className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
    {/* Background Radial Gradient Effect */}
    <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-full max-w-7xl -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />

    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Kolom Kiri: Teks & CTA */}
            <div className="text-center lg:col-span-7 lg:text-left">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1.5 text-sm font-medium text-indigo-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-400" />
                    <span>Available for new projects</span>
                </div>

                {/* Main Heading */}
                <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Building Web Apps with{' '}
                    <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                        Modern Stack
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl lg:mx-0">
                    Saya mengembangkan aplikasi web yang responsif, terstruktur,
                    dan berkinerja tinggi menggunakan React, Inertia.js, dan
                    Tailwind CSS.
                </p>

                {/* Buttons / CTA */}
                <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                    <a
                        href="#projects"
                        className="rounded-xl bg-indigo-600 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:bg-indigo-500"
                    >
                        Lihat Portofolio
                    </a>
                    <a
                        href="#contact"
                        className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3.5 text-center font-semibold text-slate-200 transition-all duration-200 hover:bg-slate-700"
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
                    <div className="relative rounded-2xl border border-slate-700/80 bg-slate-800/80 p-6 shadow-2xl backdrop-blur-xl">
                        <div className="mb-4 flex items-center gap-2 border-b border-slate-700/60 pb-3">
                            <div className="h-3 w-3 rounded-full bg-red-500/80" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                            <div className="h-3 w-3 rounded-full bg-green-500/80" />
                            <span className="ml-2 font-mono text-xs text-slate-400">
                                HeroSection.jsx
                            </span>
                        </div>

                        <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-slate-300">
                            <code>
                                <span className="text-purple-400">const</span>{' '}
                                <span className="text-blue-400">developer</span>{' '}
                                = &#123;{'\n'}
                                {'  '}name:{' '}
                                <span className="text-emerald-400">
                                    'Fullstack Dev'
                                </span>
                                ,{'\n'}
                                {'  '}skills: [
                                <span className="text-emerald-400">
                                    'React'
                                </span>
                                ,{' '}
                                <span className="text-emerald-400">
                                    'Laravel'
                                </span>
                                ,{' '}
                                <span className="text-emerald-400">
                                    'Tailwind'
                                </span>
                                ],{'\n'}
                                {'  '}status:{' '}
                                <span className="text-emerald-400">
                                    'Ready to Code'
                                </span>
                                {'\n'}&#125;;
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>;
