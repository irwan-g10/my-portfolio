import Input from '@/components/ui/Input';
import { useForm } from '@inertiajs/react';
import AdminHome from '../AdminHome';

export default function AddProject() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        tech_stack: '',
        skill: '',
        status: '',
        thumbnail: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/projects', {
            onSuccess: () => reset(),
        });
    };
    return (
        <AdminHome>
            <div className="flex w-100 flex-col gap-2">
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Nama Project"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                    />

                    <Input
                        label="Deskripsi"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                    />

                    <Input
                        label="Tech Stack"
                        value={data.tech_stack}
                        onChange={(e) => setData('tech_stack', e.target.value)}
                    />

                    <Input
                        label="Skill"
                        value={data.skill}
                        onChange={(e) => setData('skill', e.target.value)}
                    />

                    <Input
                        label="Status"
                        value={data.status}
                        onChange={(e) => setData('status', e.target.value)}
                    />
                    <Input
                        label="Thumvnail"
                        value={data.status}
                        onChange={(e) => setData('thumbnail', e.target.value)}
                    />

                    <button
                        type="submit"
                        disabled={processing}
                        className="rounded-md bg-amber-500 px-4 py-2 font-bold text-slate-950 transition duration-200 hover:bg-amber-400 disabled:opacity-50"
                    >
                        {processing ? 'Menyimpan...' : 'Tambahkan'}
                    </button>
                </form>
            </div>
        </AdminHome>
    );
}
