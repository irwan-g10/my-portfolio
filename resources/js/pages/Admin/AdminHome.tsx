import MenuContent from "@/components/Common/MenuContent";
import GradientWaves from "@/components/GradientWaves";
import NavbarMain from "@/components/Navigation/NavbarMain";
import Dashboard from "./Dashboard/Dashboard";

export default function AdminHome() {
    return (
        <>
            <div className=" relative overflow-hidden 
                bg-slate-100
                text-slate-950
                dark:text-slate-100 dark:bg-slate-950
                ">
                <div className='absolute inset-0 z-0 pointer-events-none' >
                    <GradientWaves
                        horizonColor="#020617"
                        waveColor="#334155"
                        crestColor="#94a3b8"
                        speed={0.4}
                        amplitude={2.5}
                        waveScale={0.6}
                        waveRatio={0.9}
                        swell={35}
                        turbulence={20}
                        tilt={1.11}
                        zoom={1}
                        height={5.5}
                        fogDepth={15}
                        detail="medium"
                        brightness={1}
                        opacity={1}
                        mouseInteraction
                        parallaxStrength={0.5}
                        grain
                        grainIntensity={0.05}
                    />

                </div>
                <div className="flex z-50 relative">
                    <NavbarMain />
                    <div className="justify-start items-center flex gap-2 ms-5">
                        <div className="bg-slate-950/20 dark:bg-slate-100/20 backdrop-blur-lg rounded-full w-1 h-3/5"></div>
                        <div className="bg-slate-950/20 dark:bg-slate-100/20 backdrop-blur-lg rounded-full w-1 h-4/5"></div>
                        <div className="bg-slate-950/20 dark:bg-slate-100/20 backdrop-blur-lg rounded-full w-1 h-3/5"></div>
                    </div>
                    <div className="flex-1  relative">
                        <Dashboard/>
                    </div>
                </div>
            </div>
        </>
    )
}