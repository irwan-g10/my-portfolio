import ProjectCountCard from "../Common/ProjectCountCard";
import ProjectHeroCard from "../Common/ProjectHeroCard";
import ProjectList from "../Common/ProjectList";
import SectionTitle from "../Common/SectionTitle";

export default function ProjectSection() {
    return (
        <div className="container mb-5">
            <SectionTitle title="Latest Project"/>
            <div className="project-count d-flex gap-2 justify-content-center align-items-centerm mb-3">
                
                <ProjectCountCard count={5} label="Total Projects" />
                <ProjectCountCard count={12} label="Completed Projects" />
                <ProjectCountCard count={2} label='Years Of Experience'/>
                <ProjectCountCard count={4.5} label='Starts Rating'/>
            </div>
            <div className="project-list mt-5 ">
                <ProjectHeroCard />
                <ProjectList />
            </div>

        </div>
    )
}