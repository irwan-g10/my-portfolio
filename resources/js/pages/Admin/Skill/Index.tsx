import StatisticCard from '@/components/StatisticCard';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import AdminLayout from '../AdminLayout';
import CategorySkillContent from './Components/CategorySkillContent';
import LevelSkillContent from './Components/LevelSkillContent';
import SkillContent from './Components/SkillContent';

export default function Index({ skills, category, level }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        category: '',
    });

    const [dataActive, setDataActive] = useState('Skill');
    const statistic = [
        {
            title: 'Skill',
            total: skills.total,
        },
        {
            title: 'Category',
            total: category.total,
        },
        {
            title: 'Level',
            total: level.total,
        },
    ];
    let content;

    if (dataActive === 'Skill') {
        content = <SkillContent skills={skills} />;
    } else if (dataActive === 'Category') {
        content = <CategorySkillContent categorySkills={category} />;
        // console.log(dataCategory);
    } else if (dataActive === 'Level') {
        content = <LevelSkillContent levelSkills={level} />;
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        // post('/skills', {
        //     onSuccess: () => reset(),
        //     onError: (erors) => console.log(erors),
        // });
        // console.log(skills);
    };
    return (
        <AdminLayout title="Skill">
            <div className="grid gap-5">
                <div className="grid grid-cols-3 gap-2">
                    {statistic.map((stat) => (
                        <StatisticCard
                            key={stat.title}
                            title={stat.title}
                            total={stat.total}
                            active={dataActive === stat.title}
                            onClick={() => setDataActive(stat.title)}
                        />
                    ))}
                </div>

                {content}
            </div>
        </AdminLayout>
    );
}
