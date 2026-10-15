export default function ImageBadge() {
    return (
        <div className="group relative scale-70">
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-5 border-purple-400/80 bg-purple-400/40 md:h-100 md:w-100">
                <img
                    src="/images/profesional-foto-removebg.png"
                    alt="Foto Profil"
                    className="absolute bottom-0 left-1/2 z-10 h-auto w-[140%] max-w-none -translate-x-1/2 object-cover"
                />
            </div>

            <img
                src="/images/profesional-foto-removebg.png"
                alt="Foto Profil"
                className="absolute bottom-0 left-1/2 z-10 h-auto w-[140%] max-w-none -translate-x-1/2 object-cover [clip-path:inset(0_0_40%_0)]"
            />
            <div className="absolute -inset-1 z-0 rounded-full bg-gradient-to-r from-indigo-500 to-sky-500 opacity-30 blur-3xl transition-transform duration-300 group-hover:scale-120"></div>
        </div>
    );
}
