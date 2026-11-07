import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { useForm } from '@inertiajs/react';
import AdminLayout from '../AdminLayout';

export default function CreateCategorySkill({ categorySkill }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: categorySkill?.status || '',
    });
    const handleSumbit = (e) => {
        e.preventDefault();

        console.log(data);
        // if (isUpdate) {
        //     put(`/api/tech-stacks/${techStack.id}`, {
        //         onSuccess: () => reset(),
        //         onError: (errors) => {
        //             console.log(errors);
        //         },
        //     });
        // } else {
        post('/api/status-projects', {
            onSuccess: () => reset(),
            onError: (errors) => {
                console.log(errors);
            },
        });
        // }
    };
    return (
        <AdminLayout>
            <Card className="grid gap-2">
                <form
                    className="grid gap-2"
                    onSubmit={handleSumbit}
                >
                    <Input
                        label="Category Name"
                        placeholder="Enter Category Name"
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                    />
                    <div className="flex justify-end">
                        <Button
                            type="submit"
                            title={'Tambahkan data'}
                        />
                    </div>
                </form>
            </Card>
        </AdminLayout>
    );
}
