import AdminLayout from '../AdminLayout';
import ProjectTable from './Components/ProjectTable';
import StatisticCard from './Components/StatisticCard';

export default function Project({ projects }) {
    const dummyProjects = [
        {
            id: 1,
            title: 'Vantomic Studio',
            techStack: 'Laravel, React, Tailwind',
            collaborator: 'PT Solusi Digital',
            role: 'Fullstack Developer',
            skill: 'PHP, JavaScript',
            status: 'Completed',
        },
        {
            id: 2,
            title: 'SILAMPAH Garbage System',
            techStack: 'PHP, MySQL, Bootstrap',
            collaborator: 'Dinas Lingkungan Hidup',
            role: 'Backend Developer',
            skill: 'PHP, MySQL',
            status: 'Active',
        },
        {
            id: 3,
            title: 'Point of Sale App',
            techStack: 'Inertia.js, PostgreSQL',
            collaborator: 'Toko Berkah Jaya',
            role: 'Lead Developer',
            skill: 'TypeScript, React',
            status: 'In Progress',
        },
        {
            id: 4,
            title: 'E-Commerce Dashboard',
            techStack: 'Next.js, Tailwind CSS',
            collaborator: 'Global Retail Inc.',
            role: 'Frontend Engineer',
            skill: 'Next.js, Tailwind',
            status: 'Completed',
        },
        {
            id: 5,
            title: 'Company Profile Web',
            techStack: 'HTML, CSS, JavaScript',
            collaborator: 'CV Karya Mandiri',
            role: 'Web Designer',
            skill: 'HTML, CSS',
            status: 'Pending',
        },
    ];
    return (
        <AdminLayout title="Project">
            <div className="grid gap-2">
                <div>
                    <StatisticCard
                        title="Project"
                        total="10"
                    />
                </div>
                <ProjectTable data={projects?.data} />
            </div>
        </AdminLayout>
    );
}
