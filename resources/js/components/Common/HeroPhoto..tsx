export default function HeroPhoto() {
    return (
        <div className="relative w-125 h-125  mx-auto flex items-center justify-center">
            {/* <div className="absolute -top-20 m-auto w-full h-full rounded-full bg-slate-200/20 0 z-0 flex items-center justify-center">
                <div className="rounded-full w-3/4 h-3/4 bg-slate-300/20 blur-md"></div>
            </div> */}

            {/* 3. Foto Profesional (Layer z-10 di Atas Lingkaran) */}
            <div className="relative w-full h-full z-10 flex items-end justify-center">
                <img
                src="/images/profesional-foto-removebg.png"
                alt="Foto Irwan Gumilar"
                className="w-full h-full object-contain filter drop-shadow-xl"
            />
            </div>
        </div>
    )
}