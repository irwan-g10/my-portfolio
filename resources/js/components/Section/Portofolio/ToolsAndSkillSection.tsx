import CategoryBadge from '@/components/Common/CategoryBadge';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';
import { useState } from 'react';

export default function ToolsAndSkillSection() {
    const [categoryActive, setCategoryActive] = useState('All');

    const handleCategoryClick = (value) => {
        setCategoryActive(value);
    };
    const skills = [
        'PHP',
        'JavaScript',
        'CSS',
        'Node.js',
        'Inertia.js',
        'Bootstrap',
        'Express.js',
        'Hapi.js',
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'Laravel',
        'React.js',
        'Postman',
        'Microsoft Office',
        'Claude AI',
        'Gemini AI',
        'ChatGPT',
        'GitHub Copilot',
    ];
    const categories = [
        'Programming Language',
        'Framework',
        'Database',
        'Version Control',
        'Ai Coding Asistant',
        'Tools',
    ];

    return (
        <div className="mx-auto mb-10 w-4/5">
            <SectionTitle title="Tools and Skills" />

            <div className="mb-5 flex flex-wrap items-center justify-center gap-1">
                <CategoryBadge
                    title={'All'}
                    onClick={() => handleCategoryClick('All')}
                    isActive={'All' === categoryActive}
                />
                {categories.map((category, index) => (
                    <CategoryBadge
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        isActive={categoryActive === category}
                        title={category}
                    />
                ))}
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                {skills.map((skill, index) => (
                    <Card
                        key={index}
                        content={
                            <div className="flex flex-col items-center gap-2">
                                <i className="bi bi-filetype-php text-3xl"></i>
                                <div className="">{skill}</div>
                            </div>
                        }
                        className="w-fit rounded border-slate-400/20 bg-slate-500/10 p-4 text-sm"
                    />
                ))}
            </div>
        </div>
    );
}
