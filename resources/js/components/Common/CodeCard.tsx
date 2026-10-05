export default function CodeCard() {
    return (
        <div className="relative">
            <div className="absolute -inset-1 rounded2xl bg-gradient-to-r from-indigo-500 to-sky-500 opacity-30 blur-lg">a</div>
            <div className="relative font-mono text-sm border rounded-xl p-5 " style={{ background: '#121314' }}>
                <div className="text-slate-400 flex gap-3 items-center border-b border-slate-700/80 mb-4 pb-3">
                    <div className="h-3 w-3 bg-red-500/80 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500/80 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500/80 rounded-full"></div>
                    <span>HeroSection.jsx</span>
                </div>
                <div className="code text-slate-200 flex flex-col gap-1">
                    <div className="">
                        <span className="text-purple-400">const </span>
                        <span className="text-blue-400">developer </span>
                        <span className="text-slate-200">= &#123;</span>
                    </div>
                    <div className="ms-5 flex flex-col gap-1">
                        <div className="">name: <span className="text-emerald-400">'Fullstack Developer'</span></div>
                        <div className="">skills: [<span className="text-emerald-400">'React', 'Laravel', 'Tailwind'</span>]</div>
                        <div className="">status: <span className="text-emerald-400">'Ready to Code'</span></div>
                    </div>
                    <div className="">&#125;;</div>
                </div>
            </div>
        </div>
    )
}