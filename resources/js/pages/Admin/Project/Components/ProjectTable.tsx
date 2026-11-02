import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import ProjectTableContent from './ProjectTableContent';
import ProjectTableToolbar from './ProjectTableToolbar';

export default function ProjectTable({ projects }) {
    return (
        <Card className="relative grid gap-5 text-xs">
            <ProjectTableToolbar />
            <ProjectTableContent data={projects.data} />
            <Pagination data={projects} />
        </Card>
    );
}
