import Table from '@/components/ui/Table';
import AdminLayout from '../AdminLayout';

export default function Certificate() {
    return (
        <AdminLayout title="Certificate">
            <Table href="/certificates/create" />
        </AdminLayout>
    );
}
