export default function HeroPhoto() {
    return (
        <div className="relative mx-auto flex w-100 items-center justify-center md:w-130">
            {/* <div className="absolute -top-20 m-auto w-full h-full rounded-full bg-slate-200/20 0 z-0 flex items-center justify-center">
                <div className="rounded-full w-3/4 h-3/4 bg-slate-300/20 blur-md"></div>
            </div> */}

            {/* 3. Foto Profesional (Layer z-10 di Atas Lingkaran) */}
            <div className="relative z-10 flex h-full w-full items-end justify-center">
                <img
                    src="/images/profesional-foto-removebg.png"
                    alt="Foto Irwan Gumilar"
                    className="h-full w-full object-contain drop-shadow-xl filter"
                />
            </div>
        </div>
    );
}
