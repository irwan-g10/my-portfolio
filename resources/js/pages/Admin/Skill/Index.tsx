import StatisticCard from '@/components/StatisticCard';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import AdminLayout from '../AdminLayout';
import CategorySkillContent from './Components/CategorySkillContent';
import SkillContent from './Components/SkillContent';

export default function Index({ skills, category, level }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        category: '',
    });
    const [dataActive, setDataActive] = useState('skills');
    const statistic = [
        {
            key: 'skills',
            title: 'Skill',
            total: skills.total,
        },
        {
            key: 'category',
            title: 'Category',
            total: category.total,
        },
        {
            key: 'level',
            title: 'Level',
            total: level.total,
        },
    ];
    let content;

    if (dataActive === 'skills') {
        content = <SkillContent skills={skills} />;
    } else if (dataActive === 'category') {
        content = <CategorySkillContent categorySkills={category} />;
    }
    //  else if (dataActive === 'status-project') {
    //     content = <StatusProjectContent level={level} />;
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/skills', {
            onSuccess: () => reset(),
            onError: (erors) => console.log(erors),
        });
        // console.log(skills);
    };
    return (
        <AdminLayout title="Skill">
            <div className="grid gap-5">
                <div className="grid grid-cols-3 gap-2">
                    {statistic.map((stat) => (
                        <StatisticCard
                            key={stat.key}
                            title={stat.title}
                            total={stat.total}
                            active={dataActive === stat.key}
                            onClick={() => setDataActive(stat.key)}
                        />
                    ))}
                </div>

                {content}
            </div>
        </AdminLayout>
    );
}
