import Table from '@/components/ui/Table';
import AdminLayout from '../AdminLayout';

export default function Project() {
    const dummyProjects = [
        {
            id: 1,
            title: 'Vantomic Studio',
            category: 'Full-Stack Web',
            thumbnail: '/images/projects/vantomic.png',
            tech: 'Laravel, React, Tailwind',
            status: 'Completed',
        },
        {
            id: 2,
            title: 'SILAMPAH Garbage System',
            category: 'Information System',
            thumbnail: '/images/projects/silampah.png',
            tech: 'PHP, MySQL, Bootstrap',
            status: 'Active',
        },
        {
            id: 3,
            title: 'Point of Sale App',
            category: 'Desktop / Web',
            thumbnail: '/images/projects/pos.png',
            tech: 'Inertia.js, PostgreSQL',
            status: 'In Progress',
        },
        {
            id: 1,
            title: 'Vantomic Studio',
            category: 'Full-Stack Web',
            thumbnail: '/images/projects/vantomic.png',
            tech: 'Laravel, React, Tailwind',
            status: 'Completed',
        },
        {
            id: 2,
            title: 'SILAMPAH Garbage System',
            category: 'Information System',
            thumbnail: '/images/projects/silampah.png',
            tech: 'PHP, MySQL, Bootstrap',
            status: 'Active',
        },
        {
            id: 3,
            title: 'Point of Sale App',
            category: 'Desktop / Web',
            thumbnail: '/images/projects/pos.png',
            tech: 'Inertia.js, PostgreSQL',
            status: 'In Progress',
        },
    ];
    return (
        <AdminLayout title="Project ">
            <Table
                href="/projects/create"
                // data={dummyProjects}
            />
        </AdminLayout>
    );
}
