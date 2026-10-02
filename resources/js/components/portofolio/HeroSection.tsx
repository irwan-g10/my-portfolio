import Button from "../Common/Button";
import ProjectCountCard from "../Common/ProjectCountCard";
import { TbFileDownload } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import SocialButton from "../Common/SocialButton";


export default function HeroSection() {
    return (
        <section className="h-screen  flex items-center justify-center" id="about">
            <div className=" w-4/5">
                <div className="flex mb-5 flex-row gap-5">
                    <div className="flex-1 flex flex-col gap-2">
                        <h3 className="text-3xl font-semibold">Halo Semua,</h3>
                        <h1 className="text-4xl font-bold ">Nama Saya <span className="text-blue-500">Irwan Gumilar</span></h1>
                        <label className="text-gray-500 italic">Saya Seorang Frontend Developer</label>
                        <p className="my-3 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit aperiam voluptatem quidem ipsa quod error iure laudantium natus sapiente perspiciatis nam voluptatibus vitae voluptate porro. Sapiente harum non nemo, modi, possimus facilis quaerat maiores doloremque, necessitatibus rerum neque magnam.
                        </p>
                        <div className="project-count flex gap-2 justify-center">

                            <ProjectCountCard count={5} label="Projects" />
                            <ProjectCountCard count={2} label='Years Experience' />
                            <ProjectCountCard count={4.5} label='Starts Rating' />
                        </div>

                    </div>
                    <div className="profesional-foto flex-1 flex justify-end">
                        <img
                            src="/images/profesional-foto-removebg.png"
                            alt="Foto Irwan Gumilar"
                            className="object-fit-cover"
                        />

                    </div>
                </div>
                <div className="flex justify-between items-center mt-10">

                    <Button title="Download CV" icon={<TbFileDownload className="text-xl" />} />

                    <div className="flex gap-3  items-center justify-center">
                        <div className="font-bold">Find me on</div>
                        <div className="flex gap-2">
                            <SocialButton icon={<FaWhatsapp  />} />
                            <SocialButton icon={<FaInstagram  />} />
                            <SocialButton icon={<FaLinkedin  />} />
                            <SocialButton icon={<FaGithub  />} />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}