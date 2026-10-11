import ProjectHeroCard from "@/components/Common/ProjectHeroCard";
import ProjectList from "@/components/Common/ProjectList";
import SectionTitle from "@/components/ui/SectionTitle";


export default function ProjectSection() {
    return (
        <div className="w-4/5 mx-auto mt-10" id="project">
            <SectionTitle title="Latest Project" />

            <div className="project-list mt-5 relative">
                <div className="hidden md:flex">
                    <ProjectHeroCard />
                </div>
                <ProjectList />
            </div>

        </div>
    )
}