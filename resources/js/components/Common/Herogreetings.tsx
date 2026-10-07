import Button from "./Button";
import Card from "./Card";


export default function HeroGreetings() {
    return (

        <div className="flex flex-col gap-4 w-sm">
            <div className="border flex items-center gap-2 px-3 p-2 bg-emerald-500/10 border-emerald-500/20 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-500">Open To Work</span>
            </div>
            <div>
                <div className="font-bold text-xl">Fullstack Developer</div>
                <div className="text-xs text-slate-300">Fokus pada pengembangan aplikasi web modern, performa tinggi, dan UI/UX yang responsif.</div>
            </div>
            <Card content={
                <div className="flex ">
                    <div className="flex-1">
                        <div className="text-purple-500 font-extrabold text-xl">2+</div>
                        <div className="text-slate-200 text-xs">Tahun Pengalaman</div>
                    </div>
                    <div className=" flex-1">
                        <div className="text-purple-500 font-extrabold text-xl">10+</div>
                        <div className="text-slate-200 text-xs">Proyek Selesai</div>
                    </div>
                </div>
            } 
            className='bg-slate-500/10 border-slate-400/20'
            />

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 pt-1">
                <Button title="About me" width="w-full" />
                <Button title="Download CV" width="w-full" />
            </div>
        </div>


    )
}