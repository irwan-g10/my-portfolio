import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../ui/Button";
import TechLabel from "./TechLabel";
import Card from "../ui/Card";
import { useState } from "react";
import Badge from "../ui/Badge";

export default function ProjectCard({onClick}) {
    


    return (
        <div className="rounded-2xl border-2 max-w-80 overflow-hidden relative" onClick={onClick}>
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
                    <Badge label="React JS" />
                    <Badge label="Laravel" />
                    <Badge label="Inertia.js" />
                    <Badge label="Bootstrap" />
                    <Badge label="+5" />
                </div>
            </div>
            
        </div>
    )
}