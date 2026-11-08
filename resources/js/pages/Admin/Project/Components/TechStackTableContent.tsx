import ActionButton from '@/components/Common/Admin/ActionButton';
import IconGenerate from '@/components/IconGenerate';
import { router } from '@inertiajs/react';

export default function TechStackTableContent({ techStacks }) {
    const handleDelete = (id) => {
        if (confirm('Apakah kamu yakin ingin menghapus data ini?')) {
            // 2. Jalankan request DELETE ke route Laravel
            router.delete(`/api/tech-stacks/${id}`, {
                onSuccess: () => {
                    // Opsional: Pesan sukses atau aksi setelah terhapus
                    console.log('Data berhasil dihapus');
                },
            });
        }
    };
    return (
        <div className="w-full">
            <table className="w-full border-collapse text-left">
                <thead>
                    <tr className="bg-slate-950/50 text-xs text-slate-400 uppercase">
                        <th className="w-1 p-3">
                            <input type="checkbox" />
                        </th>
                        <th className="w-1 p-3">No</th>
                        <th className="w-1 p-3">Icon</th>
                        <th className="w-2/10 p-3">Tech Stack Name</th>
                        <th className="w-3/10 p-3">Jobdesc</th>
                        <th className="w-5/10 p-3">Description</th>
                        <th className="w-1 p-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-600">
                    {techStacks.map((project, index) => (
                        <tr
                            key={project.id}
                            className={`hover:bg-slate-600 ${index % 2 === 0 ? '' : 'bg-slate-950/50'} `}
                        >
                            <td className="p-3 text-center whitespace-nowrap">
                                <input type="checkbox" />
                            </td>
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">
                                <IconGenerate
                                    icon={project.icon}
                                    className="text-lg"
                                />
                            </td>
                            <td className="p-3">{project.title}</td>
                            <td className="p-3">{project.job_desc}</td>
                            <td className="p-3">{project.description}</td>
                            <td className="p-3">
                                <ActionButton
                                    handleDelete={() =>
                                        handleDelete(project.id)
                                    }
                                    href={`/tech-stacks/${project.id}/update`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
