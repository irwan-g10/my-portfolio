import Button from '@/components/ui/Button';
import AdminLayout from '../AdminLayout';

export default function Journey() {
    return (
        <AdminLayout title="Journey">
            {/* <Table href="/journey/create" /> */}
            <Button
                title={'tambah'}
                href={'/journey/create'}
            />
        </AdminLayout>
    );
}
