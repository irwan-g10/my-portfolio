import TableFooter from '@/components/Common/Admin/TableFooter';
import TableHeader from '@/components/Common/Admin/TableHeader';
import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import TechStackTableContent from './TechStackTableContent';

export default function TechStackTable({ techStacks }) {
    return (
        <Card className="relative grid gap-5 text-xs">
            <TableHeader addUrl="/tech-stacks/create" />
            <TechStackTableContent techStacks={techStacks.data} />
            <TableFooter />
            <Pagination data={techStacks} />
        </Card>
    );
}
