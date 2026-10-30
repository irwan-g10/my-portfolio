import CategoryBadge from '@/components/Common/CategoryBadge';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';
import { useState } from 'react';

export default function ToolsAndSkillSection() {
    const [categoryActive, setCategoryActive] = useState('All');
    const [hoverCategoryActive, setHoverCategoryActive] = useState(null);

    const handleCategoryClick = (value) => {
        setCategoryActive(value);
    };
    const handleCategoryHover = (value) => {
        setHoverCategoryActive(value);
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

            <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
                <CategoryBadge
                    title={'All'}
                    onClick={() => handleCategoryClick('All')}
                    onMouseLeave={() => handleCategoryHover(null)}
                    onMouseEnter={() => handleCategoryHover('All')}
                    isActive={
                        hoverCategoryActive
                            ? hoverCategoryActive === 'All'
                            : 'All' === categoryActive
                    }
                />
                {categories.map((category, index) => (
                    <CategoryBadge
                        key={index}
                        onClick={() => handleCategoryClick(category)}
                        onMouseLeave={() => handleCategoryHover(null)}
                        onMouseEnter={() => handleCategoryHover(category)}
                        isActive={
                            hoverCategoryActive
                                ? hoverCategoryActive === category
                                : categoryActive === category
                        }
                        title={category}
                    />
                ))}
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                {skills.map((skill, index) => (
                    <Card
                        key={index}
                        className="w-fit transform rounded border-slate-400/20 bg-slate-500/10 p-4 text-sm transition-all duration-300 hover:mx-2 hover:-translate-y-5 hover:scale-105 hover:rotate-5"
                    >
                        <div className="flex flex-col items-center gap-2">
                            {/* <i className="bi bi-filetype-php text-3xl"></i> */}
                            <div className="">{skill}</div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
