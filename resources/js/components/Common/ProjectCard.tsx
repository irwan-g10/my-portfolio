import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";
import TechLabel from "./TechLabel";
import Card from "./Card";

export default function ProjectCard() {
    return (
        <div className="rounded-2xl border-2 max-w-80 overflow-hidden relative">
            <img src="/images/website.png" className="card-img-top rounded object-cover" alt="Project Image" />
            <div className="card-body flex flex-col gap-2 p-5">
                <div className="absolute top-5 right-5  text-xs font-semibold  text-sm">
                    <Card content={'Laravel Developer'} className="bg-slate-400/10 border-slate-400/20 text-slate-950 p-1 rounded-full px-3" />
                </div>
                <div className="text-xl font-black">Project Title</div>
                <div className="card-text text-sm mb-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus at corrupti tempora. Consectetur, dolorum ratione?
                </div>
                <hr className="w-full my-2"/>
                <div className="flex flex-wrap gap-2 mb-5 ">
                    <TechLabel label="React JS" />
                    <TechLabel label="Laravel" />
                    <TechLabel label="Inertia.js" />
                    <TechLabel label="Bootstrap" />
                    <TechLabel label="+5" />
                </div>
            </div>
        </div>
    )
}