import ProjectCountCard from "../Common/ProjectCountCard";
import ProjectHeroCard from "../Common/ProjectHeroCard";
import ProjectList from "../Common/ProjectList";
import SectionTitle from "../Common/SectionTitle";

export default function ProjectSection() {
    return (
        <div className="container mb-5">
            <SectionTitle title="Latest Project"/>
            
            <div className="project-list mt-5 ">
                <ProjectHeroCard />
                <ProjectList />
            </div>

        </div>
    )
}