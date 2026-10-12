import GradientWaves from '@/components/GradientWaves';
import NavbarMain from '@/components/Navigation/NavbarMain';
import SectionTitle from '@/components/ui/SectionTitle';
import { usePage } from '@inertiajs/react';

export default function AdminHome({ children }) {
    const { url } = usePage();
    const currentSegment = url.split('/').filter(Boolean).pop();
    console.log(currentSegment);
    return (
        <>
            <div className="relative overflow-hidden bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
                <div className="pointer-events-none absolute inset-0 z-0">
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
                <div className="relative z-50 flex">
                    <NavbarMain />
                    <div className="ms-5 flex items-center justify-start gap-2">
                        <div className="h-3/5 w-1 rounded-full bg-slate-950/20 backdrop-blur-lg dark:bg-slate-100/20"></div>
                        <div className="h-4/5 w-1 rounded-full bg-slate-950/20 backdrop-blur-lg dark:bg-slate-100/20"></div>
                        <div className="h-3/5 w-1 rounded-full bg-slate-950/20 backdrop-blur-lg dark:bg-slate-100/20"></div>
                    </div>
                    <div className="relative flex-1 p-5">
                        <SectionTitle title={currentSegment?.toUpperCase()} />
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
