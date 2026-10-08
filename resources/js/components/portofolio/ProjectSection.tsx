import ProjectCountCard from "../Common/ProjectCountCard";
import ProjectHeroCard from "../Common/ProjectHeroCard";
import ProjectList from "../Common/ProjectList";
import SectionTitle from "../Common/SectionTitle";

export default function ProjectSection() {
    return (
        <div className="w-4/5 mx-auto mt-10" id="project">
            <SectionTitle title="Latest Project"/>
            
            <div className="project-list mt-5 ">
                <div className="hidden md:flex"><ProjectHeroCard /></div>
                <ProjectList />
            </div>

        </div>
    )
}