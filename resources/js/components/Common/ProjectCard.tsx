import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";
import TechLabel from "./TechLabel";

export default function ProjectCard() {
    return (
        <div className="border  rounded-xl shadow-md m-2 p-5 flex flex-col gap-2 hover:scale-105 transition-all duration-300">
            <img src="/images/website.png" className="card-img-top rounded mt-2" alt="Project Image" />
            <div className="card-body">
                <label className=" text-primary font-semibold  text-sm">Project STACK</label>
                <div className="text-xl font-black">Project Title</div>
                <div className="card-text text-sm mb-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus at corrupti tempora. Consectetur, dolorum ratione?
                    </div>
                <div className="flex flex-wrap gap-2 mb-5 ">
                    <TechLabel label="React JS" />
                    <TechLabel label="Laravel" />
                    <TechLabel label="Inertia.js" />
                    <TechLabel label="Bootstrap" />
                    <TechLabel label="+5" />
                </div>
                <Button title ='Explore Project' icon={<FaArrowRightLong/>} />
            </div>
        </div>
    )
}