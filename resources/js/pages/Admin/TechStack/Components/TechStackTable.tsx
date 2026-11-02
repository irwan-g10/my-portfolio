import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import TechStackTableContent from './TechStackTableContent';
import TechStackTableToolbar from './TechStackTableToolbar';

export default function TechStackTable({ techStacks }) {
    return (
        <Card className="relative grid gap-5 text-xs">
            <TechStackTableToolbar />
            <TechStackTableContent techStacks={techStacks.data} />
            <Pagination data={techStacks} />
        </Card>
    );
}
