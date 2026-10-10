import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";
import ExpandableButton from "./ExpandableButton";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

export default function ProjectList() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleShowProject = () => {
        setIsVisible((prev) => !prev)
    }
    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isVisible]);

    return (
        <div className='m-5 relative overflow-x-hidden' >
            <div className="grid md:grid-cols-4 gap-5 justify-center items-center mb-5">
                <ProjectCard onClick={toggleShowProject} />
                <ProjectCard onClick={toggleShowProject} />
                <ProjectCard onClick={toggleShowProject} />

            </div>
            {isVisible && (
                <div className="fixed  top-0 inset-x-0 mx-auto z-70 w-full h-full bg-slate-400/10 backdrop-blur-sm">
                    <div className="w-4/5 h-4/5 bg-slate-950 overflow-y-auto absolute inset-0 m-auto rounded-lg">
                        <div className="relative h-200 bg-red-500 m-10">
                            <Button title="close" className="w-fit text-slate-950 fixed right-5 top-5" onclick={toggleShowProject}/>
                        </div>
                    </div>
                </div>
            )}
            <ExpandableButton title='Lihat Lebih Banyak' />
        </div>
    )
}