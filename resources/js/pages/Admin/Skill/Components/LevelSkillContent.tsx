import TableFooter from '@/components/Common/Admin/TableFooter';
import TableHeader from '@/components/Common/Admin/TableHeader';
import Pagination from '@/components/Pagination';
import Card from '@/components/ui/Card';
import LevelSkillTable from './LevelSkillTable';

export default function LevelSkillContent({ levelSkills }) {
    return (
        <Card className="relative grid gap-5 text-xs">
            <TableHeader
                addUrl="/level-skills/create"
                title={'Level'}
            />
            <LevelSkillTable levelSkills={levelSkills.data} />
            <TableFooter />
            <Pagination data={levelSkills} />
        </Card>
    );
}
