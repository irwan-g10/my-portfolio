export default function CodeCard() {
    return (
        <div className="relative h-fit">
            <div className="rounded2xl absolute -inset-1 bg-gradient-to-r from-indigo-500 to-sky-500 opacity-30 blur-lg">
                a
            </div>
            <div className="relative rounded-xl border bg-slate-950/70 p-5 font-mono text-sm">
                <div className="mb-4 flex items-center gap-3 border-b border-slate-700/80 pb-3 text-slate-400">
                    <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                    <span>HeroSection.jsx</span>
                </div>
                <div className="code flex flex-col gap-1 text-slate-200">
                    <div className="">
                        <span className="text-purple-400">const </span>
                        <span className="text-blue-400">developer </span>
                        <span className="text-slate-200">= &#123;</span>
                    </div>
                    <div className="ms-5 flex flex-col gap-1">
                        <div className="">
                            name:{' '}
                            <span className="text-emerald-400">
                                'Fullstack Developer'
                            </span>
                        </div>
                        <div className="">
                            skills: [
                            <span className="text-emerald-400">
                                'React', 'Laravel', 'Tailwind'
                            </span>
                            ]
                        </div>
                        <div className="">
                            status:{' '}
                            <span className="text-emerald-400">
                                'Ready to Code'
                            </span>
                        </div>
                    </div>
                    <div className="">&#125;;</div>
                </div>
            </div>
        </div>
    );
}
