import StatisticCard from '@/components/StatisticCard';
import AdminLayout from '../AdminLayout';
import CategorySkillContent from '../Skill/Components/CategorySkillContent';

function CategorySkill({ categorySkills }) {
    console.log(categorySkills);
    return (
        <AdminLayout title="Category Skills">
            <div className="grid gap-5">
                <StatisticCard
                    title="Category Skill"
                    total="10"
                />
                <CategorySkillContent categorySkills={categorySkills} />
            </div>
        </AdminLayout>
    );
}

export default CategorySkill;
