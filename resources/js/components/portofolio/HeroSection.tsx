import CodeCard from "../Common/CodeCard";
import HeroGreetings from "../Common/Herogreetings";
import HeroPhoto from "../Common/HeroPhoto.";
import DotField from "../DotField";
import GradientWaves from "../GradientWaves";
import ScrollVelocity from "../ScrollVelocity";
import StrokeText from "../StrokeText";
import WebThreads from "../WebThreads";
import { motion } from "motion/react";

export default function HeroSection() {
    return (

        <div className="relative w-100% h-screen flex justify-center items-center" id="home">
            <div className='absolute inset-0 z-0 pointer-events-none' >
                <GradientWaves
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
                />

            </div>

            <div className='absolute top-20 z-0 pointer-events-none flex flex-col' >

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
                <motion.div
                    className="pointer-events-auto absolute bottom-0 left-0 z-100 m-10 md:m-20"
                    initial={{ opacity: 0, x: -60, y: 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }} // once: false agar animasi ulang terus saat discroll
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    <HeroGreetings />
                </motion.div>

                <motion.div
                    className="pointer-events-auto absolute top-56 md:top-auto md:bottom-0 md:right-0 md:m-20"
                    initial={{ opacity: 0, x: 60, y: 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }} // once: false agar animasi ulang terus saat discroll
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                >
                    <CodeCard />
                </motion.div>
            <div className="absolute z-10 bottom-0 ">
                {/* <motion.div
                    className=""
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.25, 0.1, 0.25, 1]
                    }}
                > */}

                <HeroPhoto />
                {/* </motion.div> */}
            </div>

            {/* <section className="h-screen relative z-10 flex items-center justify-center text-white" id="about">

            </section> */}
        </div>
    )
}