import Table from '@/components/ui/Table';
import { Column } from '@/types/table';
import AdminLayout from '../AdminLayout';
interface Skill {
    id: number;
    title: string;
}

export default function Skill() {
    const skills: Skill[] = [
        { id: 1, title: 'PHP' },
        { id: 2, title: 'Laravel' },
        { id: 3, title: 'JavaScript' },
        { id: 4, title: 'TypeScript' },
        { id: 5, title: 'React' },
        { id: 6, title: 'Inertia' },
        { id: 7, title: 'Tailwind' },
        { id: 8, title: 'Bootstrap' },
        { id: 9, title: 'MySQL' },
        { id: 10, title: 'Git' },
        { id: 11, title: 'GitHub' },
        { id: 12, title: 'Node' },
        { id: 13, title: 'Express' },
        { id: 14, title: 'Docker' },
        { id: 15, title: 'Linux' },
    ];
    const skillCollumn: Column<Skill>[] = [
        { header: 'Title', accessor: 'title' },
    ];
    return (
        <AdminLayout title="Skill">
            <Table
                href="/skills/create"
                data={skills}
                columns={skillCollumn}
            />
        </AdminLayout>
    );
}
