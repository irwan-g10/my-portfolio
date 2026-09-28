import ProjectCountCard from "./Common/ProjectCountCard";
import ProjectHeroCard from "./Common/ProjectHeroCard";
import ProjectList from "./Common/ProjectList";

export default function ProjectSection() {
    return (
        <div className="container mb-5">
            <h1 className="align-items-center justify-content-start d-flex  ">Latest Project</h1>
            <hr className="mb-5" />
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