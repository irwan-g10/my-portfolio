import ProjectList from '@/components/Common/ProjectList';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ProjectSection() {
    return (
        <div
            className="mx-auto mt-10"
            id="project"
        >
            <div className="mx-auto w-4/5">
                <SectionTitle title="Latest Project" />
            </div>

            <div className="project-list relative mt-5">
                <div className="mx-auto hidden w-4/5 md:flex">
                    {/* <ProjectHeroCard /> */}
                </div>
                <ProjectList />
            </div>
        </div>
    );
}
