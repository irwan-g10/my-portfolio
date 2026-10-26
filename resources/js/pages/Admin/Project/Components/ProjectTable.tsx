import Card from '@/components/ui/Card';
import ProjectTableContent from './ProjectTableContent';
import ProjectTableToolbar from './ProjectTableToolbar';

export default function ProjectTable({ data }) {
    return (
        <Card className="relative grid gap-5 text-xs">
            <ProjectTableToolbar />
            <ProjectTableContent data={data} />
        </Card>
    );
}
