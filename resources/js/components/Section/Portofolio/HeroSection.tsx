import CodeCard from '@/components/Common/CodeCard';
import HeroGreetings from '@/components/Common/Herogreetings';
import HeroPhoto from '@/components/Common/HeroPhoto.';
import GradientWaves from '@/components/GradientWaves';
import StrokeText from '@/components/StrokeText';

export default function HeroSection() {
    return (
        <div
            className="w-100% relative flex h-screen items-center justify-center overflow-x-hidden"
            id="home"
        >
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

            <div className="pointer-events-none absolute top-20 z-0 flex flex-col">
                <StrokeText
                    text="PORTFOLIO"
                    strokeColor="#646464"
                    fillColor="#646464"
                    strokeWidth={3}
                    drawDuration={2}
                    fillDelay={0}
                    stagger={0.05}
                    ease="power2.out"
                    trigger="mount"
                    fillMode="wipe"
                    fontSize={80}
                    fontWeight={700}
                    letterSpacing={-4}
                    reverse={false}
                />
                <div className="noto-sans hidden md:flex">
                    <StrokeText
                        text="IRWAN GUMILAR"
                        strokeColor="#646464"
                        fillColor="transparent"
                        strokeWidth={3}
                        drawDuration={5}
                        fillDelay={0}
                        stagger={0.05}
                        ease="power2.out"
                        trigger="mount"
                        fillMode="wipe"
                        fontSize={120}
                        fontWeight={700}
                        letterSpacing={-4}
                        reverse={false}
                    />
                </div>
            </div>
            <div className="pointer-events-auto absolute bottom-0 left-0 z-100 m-10 md:m-20">
                <HeroGreetings />
            </div>

            <div className="pointer-events-auto absolute top-56 md:top-auto md:right-0 md:bottom-0 md:z-100 md:m-20">
                <CodeCard />
            </div>
            <div className="absolute z-10 md:bottom-0">
                <HeroPhoto />
            </div>

            {/* <section className="h-screen relative z-10 flex items-center justify-center text-white" id="about">

            </section> */}
        </div>
    );
}
