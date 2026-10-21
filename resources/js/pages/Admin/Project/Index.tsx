import Table from '@/components/ui/Table';
import { Column } from '@/types/table';
import AdminLayout from '../AdminLayout';

interface Project {
    id: number;
    title: string;
    category: string;
    tech: string;
    status: string;
}

export default function Project() {
    const projects: Project[] = [
        {
            id: 1,
            title: 'Vantomic Studio',
            category: 'Full-Stack Web',
            tech: 'Laravel, React, Tailwind',
            status: 'Completed',
        },
        {
            id: 2,
            title: 'SILAMPAH Garbage System',
            category: 'Information System',
            tech: 'PHP, MySQL, Bootstrap',
            status: 'Active',
        },
        {
            id: 3,
            title: 'Point of Sale App',
            category: 'Desktop / Web',
            tech: 'Inertia.js, PostgreSQL',
            status: 'In Progress',
        },
        {
            id: 1,
            title: 'Vantomic Studio',
            category: 'Full-Stack Web',
            tech: 'Laravel, React, Tailwind',
            status: 'Completed',
        },
        {
            id: 2,
            title: 'SILAMPAH Garbage System',
            category: 'Information System',
            tech: 'PHP, MySQL, Bootstrap',
            status: 'Active',
        },
        {
            id: 3,
            title: 'Point of Sale App',
            category: 'Desktop / Web',
            tech: 'Inertia.js, PostgreSQL',
            status: 'In Progress',
        },
    ];
    const projectColumn: Column<Project>[] = [
        { header: 'Title', accessor: 'title' },
        { header: 'Category', accessor: 'category' },
        { header: 'Tech', accessor: 'tech' },
        { header: 'Status', accessor: 'status' },
    ];
    return (
        <AdminLayout title="Project ">
            <Table
                href="/projects/create"
                data={projects}
                columns={projectColumn}
            />
        </AdminLayout>
    );
}
