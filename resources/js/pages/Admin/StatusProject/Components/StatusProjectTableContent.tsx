import IconGenerate from '@/components/IconGenerate';
import Button from '@/components/ui/Button';
import { router } from '@inertiajs/react';

export default function StatusProjectTableContent({ statusProjects }) {
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
                        <th className="w-10/10 p-3">Status Name</th>
                        <th className="w-1 p-3 text-center">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-600">
                    {statusProjects.map((project, index) => (
                        <tr
                            key={project.id}
                            className={`hover:bg-slate-600 ${index % 2 === 0 ? '' : 'bg-slate-950/50'}`}
                        >
                            <td className="p-3">
                                <input type="checkbox" />
                            </td>
                            <td className="p-3 whitespace-nowrap">
                                {index + 1}
                            </td>
                            <td className="p-3">
                                <IconGenerate
                                    icon={project.icon}
                                    className="text-xl"
                                />
                            </td>
                            <td className="p-3">{project.Status}</td>
                            <td className="p-3">{project.job_desc}</td>
                            <td className="p-3">{project.description}</td>
                            <td className="p-3">
                                <div className="flex gap-2">
                                    <Button
                                        icon={<i className="bi bi-trash3"></i>}
                                        className="h-7 w-7 rounded-sm text-xs"
                                        onClick={() => handleDelete(project.id)}
                                    />
                                    <Button
                                        icon={
                                            <i className="bi bi-pencil-square"></i>
                                        }
                                        href={`/tech-stacks/${project.id}/update`}
                                        className="h-7 w-7 rounded-sm text-xs"
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
