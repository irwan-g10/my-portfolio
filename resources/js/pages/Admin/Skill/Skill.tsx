import Table from '@/components/ui/Table';
import AdminLayout from '../AdminLayout';

export default function Skill() {
    return (
        <AdminLayout title="Skill">
            <Table href="/skills/create" />
        </AdminLayout>
    );
}
