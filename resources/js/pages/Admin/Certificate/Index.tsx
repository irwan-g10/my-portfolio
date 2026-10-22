import Button from '@/components/ui/Button';
import AdminLayout from '../AdminLayout';

interface Certificate {}

export default function Certificate() {
    return (
        <AdminLayout title="Certificate">
            <Button
                title={'tambah'}
                href="/certificates/create"
            />
        </AdminLayout>
    );
}
