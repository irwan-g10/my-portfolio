import CategoryBadge from '@/components/Common/CategoryBadge';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ToolsAndSkillSection() {
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
            {/* <div className="flex flex-row gap-2 justify-center align-items-center mb-5 flex-wrap"> */}
            <div className="mb-5 flex flex-wrap items-center justify-center gap-1">
                {/* <JellyRadio
                    items={[
                        { value: 'All', label: 'All' },
                        { value: 'Programming Language', label: 'Programming Language' },
                        { value: 'Framework', label: 'Framework' },
                        { value: 'Database', label: 'Database' },
                        { value: 'Version Control', label: 'Version Control' },
                        { value: 'AI Coding Asistant', label: 'AI Coding Asistant' },
                        { value: 'Tools', label: 'Tools' },
                    ]}
                    defaultValue="All"
                    onChange={(value, index) => console.log(value, index)}
                    chipColor="#27272a"
                    activeColor="#f5f5f5"
                    textColor="#f5f5f5"
                    activeTextColor="#18181b"
                    size="md"
                    gap={8}
                    radius={18}
                    swell={0.2}
                    barge={6}
                    shrink={0.05}
                    jelly={1}
                    bounce={0.25}
                    stagger={22}
                    stiffness={580}
                /> */}
                <CategoryBadge title={'All'} isActive={true} />
                {categories.map((category, index) => (
                    <CategoryBadge key={index} title={category} />
                ))}
                {/* <div className="btn btn-outline-primary fw-bold">All</div>
                <div className="btn btn-outline-primary fw-bold">Programming Languages</div>
                <div className="btn btn-outline-primary fw-bold">Framework</div>
                <div className="btn btn-outline-primary fw-bold">Database</div>
                <div className="btn btn-outline-primary fw-bold">Version Control</div>
                <div className="btn btn-outline-primary fw-bold">AI Coding Asistant</div>
                <div className="btn btn-outline-primary fw-bold">Tools</div> */}
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-2">
                {skills.map((skill, index) => (
                    <Card
                        key={index}
                        content={<div className="">{skill}</div>}
                        className="w-fit border-slate-400/20 bg-slate-500/10 p-2 text-sm"
                    />
                ))}
            </div>
        </div>
    );
}
