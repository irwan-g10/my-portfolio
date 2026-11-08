import StatisticCard from '@/components/StatisticCard';
import AdminLayout from '../AdminLayout';
import CategorySkillTable from '../Skill/Components/CategorySkillContent';

function CategorySkill({ categorySkills }) {
    console.log(categorySkills);
    return (
        <AdminLayout title="Category Skills">
            <div className="grid gap-5">
                <StatisticCard
                    title="Category Skill"
                    total="10"
                />
                <CategorySkillTable categorySkills={categorySkills} />
            </div>
        </AdminLayout>
    );
}

export default CategorySkill;
