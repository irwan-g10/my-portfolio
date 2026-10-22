import Button from '@/components/ui/Button';
import AdminLayout from '../AdminLayout';

export default function Index() {
    return (
        <AdminLayout title="Skill">
            <Button
                title={'Tambah'}
                href={'/skills/create'}
            />
        </AdminLayout>
    );
}
