import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import ImageBadge from '@/components/Common/ImageBadge';
import SocialButton from '@/components/Common/SocialButton';
import { motion } from 'motion/react';

export default function AboutSection() {
    return (
        <div className="w-100% relative h-screen">
            <section
                className="relative z-10 flex h-screen items-center justify-center"
                id="about"
            >
                <div className="md:w-4/5">
                    <div className="mt-10 mb-5 flex flex-col-reverse gap-5 md:flex md:flex-row">
                        <motion.div
                            className=""
                            initial={{ opacity: 0, x: -100, y: 0 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }} // once: false agar animasi ulang terus saat discroll
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                        >
                            <div className="m-10">
                                <h3 className="text-3xl font-semibold">
                                    Halo Semua,
                                </h3>
                                <div className="flex items-center">
                                    <div className="text-4xl font-bold">
                                        Saya Irwan Gumilar
                                    </div>
                                </div>
                                <label className="text italic">
                                    Saya Seorang Frontend Developer
                                </label>
                                <p className="my-3 text-sm">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Neque, fugit aperiam
                                    voluptatem quidem ipsa quod error iure
                                    laudantium natus sapiente perspiciatis nam
                                    voluptatibus vitae voluptate porro. Sapiente
                                    harum non nemo, modi, possimus facilis
                                    quaerat maiores doloremque, necessitatibus
                                    rerum neque magnam.
                                </p>
                                <div className="flex items-center justify-end gap-3">
                                    <div className="flex gap-3">
                                        <SocialButton icon={<FaInstagram />} />
                                        <SocialButton icon={<FaLinkedin />} />
                                        <SocialButton icon={<FaGithub />} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="profesional-foto flex items-center justify-center"
                            initial={{ opacity: 0, x: 50, y: 0 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }} // once: false agar animasi ulang terus saat discroll
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                        >
                            <ImageBadge />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
