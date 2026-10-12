import ProjectHeroCard from '@/components/Common/ProjectHeroCard';
import ProjectList from '@/components/Common/ProjectList';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ProjectSection() {
    return (
        <div className="mx-auto mt-10 w-4/5" id="project">
            <SectionTitle title="Latest Project" />

            <div className="project-list relative mt-5">
                <div className="hidden md:flex">
                    <ProjectHeroCard />
                </div>
                <ProjectList />
            </div>
        </div>
    );
}
