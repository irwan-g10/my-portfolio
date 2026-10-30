export default function ImageBadge() {
    return (
        <div className="group relative w-fit">
            <div className="relative h-70 w-70 overflow-hidden rounded-full border-5 border-amber-500/80 bg-amber-500/40">
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
            <div className="absolute -inset-1 z-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-500 opacity-30 blur-3xl transition-transform duration-300 group-hover:scale-110"></div>
            {/* <div className="flex gap-3">
                <Button
                    icon={<i className="bi bi-instagram"></i>}
                    className="h-20 w-20 text-3xl"
                />
                <Button
                    icon={<i className="bi bi-linkedin"></i>}
                    className="h-20 w-20 text-3xl"
                />
                <Button
                    icon={<i className="bi bi-github"></i>}
                    className="h-20 w-20 text-3xl"
                />
            </div> */}
        </div>
    );
}
