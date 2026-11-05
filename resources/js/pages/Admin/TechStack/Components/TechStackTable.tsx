import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import TechStackTableContent from './TechStackTableContent';
import TechStackTableFooter from './TechStackTableFooter';
import TechStackTableToolbar from './TechStackTableToolbar';

export default function TechStackTable({ techStacks }) {
    return (
        <Card className="relative grid gap-5 text-xs">
            <TechStackTableToolbar />
            <TechStackTableContent techStacks={techStacks.data} />
            <TechStackTableFooter></TechStackTableFooter>
            <Pagination data={techStacks} />
        </Card>
    );
}
