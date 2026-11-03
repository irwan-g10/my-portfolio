import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Dropdown from '@/components/ui/Dropdown';
import Input from '@/components/ui/Input';
import { useForm } from '@inertiajs/react';
import AdminLayout from '../AdminLayout';

export default function CreateTechStack({ techStack, isUpdate }) {
    const { data, setData, post, put, processing, errors, reset } = useForm({
        title: techStack?.title || '',
        job_desc: techStack?.job_desc || '',
        description: techStack?.description || '',

        icon_type: techStack?.icon_type || '',
        icon_source: techStack?.source || '',
        icon_category: 'tech-stack',
    });
    // console.log(techStack);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);
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
                    <div className="grid grid-cols-3 gap-2">
                        <div className="flex items-center justify-center rounded-sm bg-red-500 p-2">
                            <i className="devicon-react-original text-6xl"></i>
                        </div>
                        <div className="col-span-2 gap-2">
                            <div className="grid grid-cols-3 gap-2">
                                <Input
                                    type="text"
                                    label="Icon"
                                    placeholder="Enter Icon"
                                    value={data.title}
                                    disabled
                                />
                                <Input
                                    label="category"
                                    disabled
                                    value={data.icon_category}
                                />
                                <div className="flex items-end">
                                    <div className="mb-3 w-full">
                                        <Dropdown
                                            name="icon"
                                            options={[
                                                'bootstrap-icons',
                                                'dev-icons',
                                                'image',
                                            ]}
                                            value={data.icon_type}
                                            onChange={(e) =>
                                                setData(
                                                    'icon_type',
                                                    e.target.value,
                                                )
                                            }
                                            label="Select Type"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Input
                                label="Source"
                                onChange={(e) =>
                                    setData('icon_source', e.target.value)
                                }
                                value={data.icon_source}
                                placeholder="Enter Source"
                            />
                        </div>
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
