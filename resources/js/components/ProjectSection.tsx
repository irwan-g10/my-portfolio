import ProjectCountCard from "./Common/ProjectCountCard";
import ProjectHeroCard from "./Common/ProjectHeroCard";
import ProjectList from "./Common/ProjectList";

export default function ProjectSection() {
    return (
        <div className="container">
            <h1 className="align-items-center justify-content-center d-flex mb-5 ">Latest Project</h1>
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