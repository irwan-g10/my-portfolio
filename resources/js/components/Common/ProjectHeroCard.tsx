import { FaGithub, FaStar } from "react-icons/fa6";
import ProjectList from "./ProjectList";
import TechLabel from "./TechLabel";
import Button from "./Button";

export default function ProjectHeroCard() {
    return (
        <div className="border rounded-2xl p-5 py-10 shadow-sm">
            <div className="flex ">
                <div className="gambar flex-3 justify-start items-center flex">
                    <img src="/images/website.png" alt="Project Image" className="border border-secondary img-fluid object-fit-cover shadow-sm rounded-5" style={{ height: '250px' }} />
                </div>
                <div className="deskripsi flex-2 flex gap-2 flex-col">
                    <div className="flex mb-3 items-center gap-2 border bg-blue-500 font-bold shadow-sm rounded-full italic p-1 px-5 mb-2 text-white" style={{ width: 'fit-content' }}>
                        <FaStar />
                        <span>On-Going Project</span>
                    </div>
                    <h3 className="font-bold text-xl">E-Commerce Web Application</h3 >
                    <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquam eum adipisci ullam ex, saepe cum atque at aut dolorum officiis pariatur voluptate laudantium. Quod fugiat, placeat est sunt, vel aut sequi nemo eum totam odit ut vero deleniti! Fuga?</div>
                    <div className="flex flex-wrap gap-2 mt-3">
                        <TechLabel label="React JS" />
                        <TechLabel label="Laravel" />
                        <TechLabel label="Inertia.js" />
                        <TechLabel label="Bootstrap" />
                        <TechLabel label="+5" />
                    </div>
                    <div className="flex gap-3 mt-3 justify-end align-items-center ">
                        <Button title='Live Demo'/>
                        <Button title='GIthub' icon={<FaGithub />} />
                    </div>
                </div>
            </div>
            {/* <ProjectList /> */}
        </div>
    )
}