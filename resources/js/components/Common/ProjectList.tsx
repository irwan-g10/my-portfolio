import { FaArrowRightLong } from "react-icons/fa6";
import Button from "./Button";
import ExpandableButton from "./ExpandableButton";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
    return (
        <div className='m-5'>
            <div className="grid grid-cols-3 gap-5 justify-center items-center mb-5">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className=" flex justify-center items-center">
                <Button title='Lihat lebih banyak' icon={<FaArrowRightLong />} />
            </div>
        </div>
    )
}