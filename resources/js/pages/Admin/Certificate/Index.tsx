import Table from '@/components/ui/Table';
import AdminLayout from '../AdminLayout';

interface Certificate {}

export default function Certificate() {
    return (
        <AdminLayout title="Certificate">
            <Table href="/certificates/create" />
        </AdminLayout>
    );
}
