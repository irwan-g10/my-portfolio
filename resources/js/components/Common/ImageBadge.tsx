export default function ImageBadge() {
    return (
        <div className="relative ">

            <div className="rounded-full bg-purple-400/40 border-purple-400/80 border-5  w-90 h-90 relative overflow-hidden">
                <img
                    src="/images/profesional-foto-removebg.png"
                    alt="Foto Profil"
                    className="absolute z-10 bottom-0 left-1/2  -translate-x-1/2 w-[140%] max-w-none h-auto object-cover"
                />
            </div>

            <img
                src="/images/profesional-foto-removebg.png"
                alt="Foto Profil"
                className="[clip-path:inset(0_0_40%_0)] absolute z-10 bottom-0 left-1/2  -translate-x-1/2 w-[140%] max-w-none h-auto object-cover"
            />
            <div className="absolute z-0 -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 opacity-30 blur-3xl"></div>
        </div>
    )
}