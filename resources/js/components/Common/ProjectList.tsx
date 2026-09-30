import ExpandableButton from "./ExpandableButton";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
    return (
        <div className="d-flex flex-column gap-3">
            <div className="row gap-3 mt-3 justify-content-center align-items-center ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
        <div className="">
            <ExpandableButton />
        </div>
        </div>
    )
}