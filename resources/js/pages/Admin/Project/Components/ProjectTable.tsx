import TableFooter from '@/components/Common/Admin/TableFooter';
import TableHeader from '@/components/Common/Admin/TableHeader';
import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import Dropdown from '@/components/ui/Dropdown';
import ProjectTableContent from './ProjectTableContent';

export default function ProjectTable({ projects }) {
    return (
        <Card className="relative grid gap-5 text-xs">
            <TableHeader addUrl={'/projects/create'} />
            <ProjectTableContent data={projects.data} />
            <TableFooter>
                <Dropdown label={'Tech Stack'} />
                <Dropdown label={'Status'} />
            </TableFooter>
            <Pagination data={projects} />
        </Card>
    );
}
