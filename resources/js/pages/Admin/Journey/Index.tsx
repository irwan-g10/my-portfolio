import Table from '@/components/ui/Table';
import AdminLayout from '../AdminLayout';

export default function index() {
    return (
        <AdminLayout title="Journey">
            <Table href="/journey/create" />
        </AdminLayout>
    );
}
