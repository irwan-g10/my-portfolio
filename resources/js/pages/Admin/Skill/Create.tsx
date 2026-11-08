import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { useForm } from '@inertiajs/react';
import AdminLayout from '../AdminLayout';

export default function Create() {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: '',
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
        // post('/api/category-skills', {
        //     onSuccess: () => reset(),
        //     onError: (errors) => {
        //         console.log(errors);
        //     },
        // });
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
                        label="Skill Name"
                        placeholder="Enter Skill Name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <Input
                        label="Category"
                        placeholder="Enter Category "
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <Input
                        label="Level"
                        placeholder="Enter Level"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <Input
                        label="Percentage"
                        placeholder="Enter Percentage"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <Input
                        label="Level"
                        placeholder="Enter Level"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
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
