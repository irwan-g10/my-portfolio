import TableFooter from '@/components/Common/Admin/TableFooter';
import TableHeader from '@/components/Common/Admin/TableHeader';
import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import StatusProjectTableContent from './StatusProjectTableContent';

export default function StatusProjectTable({ statusProjects }) {
    // console.log(statusProjects);
    return (
        <Card className="relative grid gap-5 text-xs">
            <TableHeader addUrl="/status-projects/create" />
            <StatusProjectTableContent statusProjects={statusProjects.data} />
            <TableFooter />
            <Pagination data={statusProjects} />
        </Card>
    );
}
