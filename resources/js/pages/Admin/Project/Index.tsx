import { useState } from 'react';
import StatisticCard from '../../../components/StatisticCard';
import AdminLayout from '../AdminLayout';
import ProjectContent from './Components/ProjectContent';
import StatusProjectContent from './Components/StatusProjectContent';
import TechStackContent from './Components/TechStackContent';

export default function Project({ projects, techStacks, statusProjects }) {
    const [dataActive, setDataActive] = useState('projects');
    const statistic = [
        {
            key: 'projects',
            title: 'Project',
            total: projects.total,
        },
        {
            key: 'tech-stack',
            title: 'Tech Stack',
            total: techStacks.total,
        },
        {
            key: 'status-project',
            title: 'Status',
            total: statusProjects.total,
        },
    ];

    let content;

    if (dataActive === 'projects') {
        content = <ProjectContent projects={projects} />;
    } else if (dataActive === 'tech-stack') {
        content = <TechStackContent techStacks={techStacks} />;
    } else if (dataActive === 'status-project') {
        content = <StatusProjectContent statusProjects={statusProjects} />;
    }

    return (
        <AdminLayout title="Project">
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
