import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { useForm } from '@inertiajs/react';
import AdminLayout from '../AdminLayout';

export default function CreateTechStack({ techStack, isUpdate }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: techStack?.title || '',
        job_desc: techStack?.job_desc || '',
        description: techStack?.description || '',
    });
    // console.log(techStack);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isUpdate) {
            put(`/api/tech-stacks/${techStack.id}`, {
                onSuccess: () => reset(),
                onError: (errors) => {
                    console.log(errors);
                },
            });
        } else {
            post('/api/tech-stacks', {
                onSuccess: () => reset(),
                onError: (errors) => {
                    console.log(errors);
                },
            });
        }
    };
    return (
        <AdminLayout>
            <Card className="grid gap-2">
                <form onSubmit={handleSubmit}>
                    <div>
                        <Input
                            label="Tech Stack Name"
                            placeholder="Enter Tech Stack Name"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                        <Input
                            type="textarea"
                            label="Job Description"
                            placeholder="Enter Job Description"
                            rows={2}
                            value={data.job_desc}
                            onChange={(e) =>
                                setData('job_desc', e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <Input
                            type="textarea"
                            label="Description"
                            placeholder="Enter Description"
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                            // rows={4}
                        />
                    </div>
                    <div className="flex justify-end gap-2">
                        <Button
                            title="Create Tech Stack"
                            type="submit"
                        />
                    </div>
                </form>
            </Card>
        </AdminLayout>
    );
}
