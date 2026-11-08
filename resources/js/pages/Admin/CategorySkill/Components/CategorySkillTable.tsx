import TableFooter from '@/components/Common/Admin/TableFooter';
import TableHeader from '@/components/Common/Admin/TableHeader';
import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import CategorySkillTableContent from './CategorySkillTableContent';

export default function CategorySkillTable({ categorySkills }) {
    return (
        <Card className="relative grid gap-5 text-xs">
            <TableHeader addUrl="/category-skills/create" />
            <CategorySkillTableContent categorySkills={categorySkills.data} />
            <TableFooter />
            <Pagination data={categorySkills} />
        </Card>
    );
}
