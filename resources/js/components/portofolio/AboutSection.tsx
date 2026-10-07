import Button from "../Common/Button";
import ProjectCountCard from "../Common/ProjectCountCard";
import { TbFileDownload } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import SocialButton from "../Common/SocialButton";


import { motion } from "motion/react";
import TechText from "../TechText";
import DotField from "../DotField";
import WebThreads from "../WebThreads";
import StrokeText from "../StrokeText";
import ImageBadge from "../Common/ImageBadge";


export default function AboutSection() {
    return (

        <div className="relative w-100% h-screen " >

            <div className='absolute inset-0 z-0 pointer-events-none' >
                {/* <WebThreads
                    color1="#5227FF"
                    color2="#FF9FFC"
                    color3="#FFFFFF"
                    speed={0.2}
                    threadCount={6}
                    frequency={5}
                    spread={0.18}
                    taper={1}
                    position={0.5}
                    fanMode="center"
                    glow={0.02}
                    falloff={0.6}
                    thickness={1.1}
                    brightness={0.6}
                    opacity={1}
                    mirror
                    shimmer={false}
                    grain
                    grainIntensity={0.05}
                    mouseInteraction
                    mouseStrength={0.3}
                /> */}
            </div>

            <section className="h-screen relative z-10 flex items-center justify-center text-white" id="about">
                <div className=" w-4/5">
                    <div className="flex mb-5 flex-row gap-5">
                        <motion.div
                            className="flex-1 flex flex-col gap-2"
                            initial={{ opacity: 0, x: -100, y: 0 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 1 }} // once: false agar animasi ulang terus saat discroll
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >

                            <div className="">
                                <h3 className="text-3xl font-semibold">Halo Semua,</h3>
                                <div className="flex items-center">
                                    <div className=" text-4xl font-bold">Nama Saya Irwan Gumilar</div>

                                </div>
                                <label className="text italic">Saya Seorang Frontend Developer</label>
                                <p className="my-3 text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit aperiam voluptatem quidem ipsa quod error iure laudantium natus sapiente perspiciatis nam voluptatibus vitae voluptate porro. Sapiente harum non nemo, modi, possimus facilis quaerat maiores doloremque, necessitatibus rerum neque magnam.
                                </p>
                                <div className="flex gap-3  items-center justify-end">
                                    <div className="flex gap-3">
                                        <SocialButton icon={<FaInstagram />} />
                                        <SocialButton icon={<FaLinkedin />} />
                                        <SocialButton icon={<FaGithub />} />
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                        <motion.div
                            className=" profesional-foto flex-1 flex items-center justify-end"
                            initial={{ opacity: 0, x: 0, y: 0 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }} // once: false agar animasi ulang terus saat discroll
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                        >

                            <ImageBadge />
                        </motion.div>
                    </div>
                </div>

            </section>
        </div>
    )
}