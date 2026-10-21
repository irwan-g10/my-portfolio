import Card from '@/components/ui/Card';
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
            <div className="mb-5 grid grid-cols-4 gap-2">
                <Card className="flex flex-col justify-between text-xs">
                    <div className="flex justify-between border-b-2 border-slate-950 pb-2">
                        <div className="text-lg font-semibold">Project</div>
                        <Card className="h-7 w-7 rounded-full bg-slate-950 p-0" />
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold">28</span>
                        <span className="text-[10px]">
                            Total Project Terdaftar
                        </span>
                    </div>
                </Card>
                <Card className="flex flex-col justify-between text-xs">
                    <div className="flex justify-between border-b-2 border-slate-950 pb-2">
                        <div className="text-lg font-semibold">Skill</div>
                        <Card className="h-7 w-7 rounded-full bg-slate-950 p-0" />
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold">28</span>
                        <span className="text-[10px]">
                            Total Skill Terdaftar
                        </span>
                    </div>
                </Card>
                <Card className="flex flex-col justify-between text-xs">
                    <div className="flex justify-between border-b-2 border-slate-950 pb-2">
                        <div className="text-lg font-semibold">Category</div>
                        <Card className="h-7 w-7 rounded-full bg-slate-950 p-0" />
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold">28</span>
                        <span className="text-[10px]">
                            Total Category Terdaftar
                        </span>
                    </div>
                </Card>
                <Card className="flex flex-col justify-between text-xs">
                    <div className="flex justify-between border-b-2 border-slate-950 pb-2">
                        <div className="text-lg font-semibold">Status</div>
                        <Card className="h-7 w-7 rounded-full bg-slate-950 p-0" />
                    </div>
                    <div className="flex items-end gap-2">
                        <span className="text-4xl font-bold">28</span>
                        <span className="text-[10px]">
                            Total Status Terdaftar
                        </span>
                    </div>
                </Card>
            </div>
            <Table
                href="/projects/create"
                data={projects}
                columns={projectColumn}
            />
        </AdminLayout>
    );
}
