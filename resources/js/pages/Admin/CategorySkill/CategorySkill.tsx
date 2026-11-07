import StatisticCard from '@/components/StatisticCard';
import AdminLayout from '../AdminLayout';
import CategorySkillTable from './Components/CategorySkillTable';

function CategorySkill() {
    return (
        <AdminLayout title="Category Skills">
            <div className="grid gap-5">
                <StatisticCard
                    title="Category Skill"
                    total="10"
                />
                <CategorySkillTable categorySkills={[]} />
            </div>
        </AdminLayout>
    );
}

export default CategorySkill;
