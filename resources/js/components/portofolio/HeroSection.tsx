import CodeCard from "../Common/CodeCard";
import HeroPhoto from "../Common/HeroPhoto.";
import DotField from "../DotField";
import GradientWaves from "../GradientWaves";
import ScrollVelocity from "../ScrollVelocity";
import StrokeText from "../StrokeText";
import WebThreads from "../WebThreads";

export default function HeroSection() {
    return (

        <div className="relative w-100% h-screen flex justify-center items-center" id="home">
            <div className='absolute inset-0 z-0 pointer-events-none rotate-180' >
                {/* <GradientWaves
                    horizonColor="#212529"
                    waveColor="#495057"
                    crestColor="#FFFFFF"
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
                />*/}
                
            </div> 
            
            <div className='absolute left-0 right-0 top-20 z-0 noto-sans pointer-events-none  flex justify-center' >
                {/* <StrokeText
                    text="IRWAN GUMILAR"
                    strokeColor="#ffffff"
                    fillColor="transparent"
                    strokeWidth={1.4}
                    drawDuration={1.6}
                    fillDelay={0.5}
                    stagger={0.05}
                    ease="power2.out"
                    trigger="mount"
                    fillMode="wipe"
                    fontSize={128}
                    fontWeight={700}
                    letterSpacing={-4}
                    reverse={false}
                /> */}
            </div>
            <div className='absolute bottom-0 right-0 m-10' >
                <CodeCard />
            </div>
            <div className="absolute bottom-0 ">
                <HeroPhoto />
            </div>

            {/* <section className="h-screen relative z-10 flex items-center justify-center text-white" id="about">

            </section> */}
        </div>
    )
}