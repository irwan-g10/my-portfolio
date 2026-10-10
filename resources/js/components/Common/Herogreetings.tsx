import Button from "./Button";
import Card from "./Card";


export default function HeroGreetings() {
    return (

        <div className="flex flex-col gap-4 md:w-sm">
            <div className="border flex items-center gap-2 px-3 p-2 bg-emerald-500/10 border-emerald-500/20 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-500">Open To Work</span>
            </div>
            <div>
                <div className="font-bold text-xl">Fullstack Developer</div>
                <div className="text-xs ">Fokus pada pengembangan aplikasi web modern, performa tinggi, dan UI/UX yang responsif.</div>
            </div>
            <Card content={
                <div className="flex ">
                    <div className="flex-1">
                        <div className="text-purple-500 font-extrabold text-xl">2+</div>
                        <div className=" text-xs">Tahun Pengalaman</div>
                    </div>
                    <div className=" flex-1">
                        <div className="text-purple-500 font-extrabold text-xl">10+</div>
                        <div className=" text-xs">Proyek Selesai</div>
                    </div>
                </div>
            } 
            className='bg-slate-950/10 border-slate-950/20 dark:bg-slate-100/10 dark:border-slate-100/20 backdrop-blur-xs'
            />

            {/* CTA Buttons */}
            <div className="flex items-center gap-5 pt-1">
                <Button title="About me" width="w-full" className='dark:bg-slate-100/10 dark:border-slate-100/20 border-slate-950/20 bg-slate-950/10  transition-all duration-200 hover:scale-110'/>
                <Button title="Download CV" width="w-full" className='dark:bg-slate-100/10 dark:border-slate-100/20  border-slate-950/20 bg-slate-950/10 transition-all duration-200 hover:scale-110'/>
            </div>
        </div>


    )
}