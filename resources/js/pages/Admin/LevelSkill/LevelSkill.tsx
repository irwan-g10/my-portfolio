import StatisticCard from '@/components/StatisticCard';
import AdminLayout from '../AdminLayout';

export default function LevelSkill({ levelSkills }) {
    return (
        <AdminLayout>
            <div className="grid gap-5">
                <StatisticCard
                    title="Level Skill"
                    total="10"
                />
                {/* <CategorySkillTable categorySkills={levelSkills} /> */}
            </div>
        </AdminLayout>
    );
}
