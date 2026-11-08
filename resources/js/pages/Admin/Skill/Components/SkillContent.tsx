import TableFooter from '@/components/Common/Admin/TableFooter';
import TableHeader from '@/components/Common/Admin/TableHeader';
import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import SkillTable from './SkillTable';

export default function SkillContent({ skills }) {
    return (
        <Card className="relative grid gap-5 text-xs">
            <TableHeader
                addUrl={'/skills/create'}
                title={'Skill'}
            />
            <SkillTable skills={skills.data} />
            <TableFooter />
            <Pagination data={skills} />
        </Card>
    );
}
