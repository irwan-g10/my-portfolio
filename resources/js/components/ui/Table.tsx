import Button from './Button';
import Card from './Card';
import Input from './Input';

export default function Table() {
    const dummyProjects = [
        {
            id: 1,
            title: 'Vantomic Studio',
            category: 'Full-Stack Web',
            thumbnail: '/images/projects/vantomic.png',
            tech: 'Laravel, React, Tailwind',
            status: 'Completed',
        },
        {
            id: 2,
            title: 'SILAMPAH Garbage System',
            category: 'Information System',
            thumbnail: '/images/projects/silampah.png',
            tech: 'PHP, MySQL, Bootstrap',
            status: 'Active',
        },
        {
            id: 3,
            title: 'Point of Sale App',
            category: 'Desktop / Web',
            thumbnail: '/images/projects/pos.png',
            tech: 'Inertia.js, PostgreSQL',
            status: 'In Progress',
        },
        {
            id: 1,
            title: 'Vantomic Studio',
            category: 'Full-Stack Web',
            thumbnail: '/images/projects/vantomic.png',
            tech: 'Laravel, React, Tailwind',
            status: 'Completed',
        },
        {
            id: 2,
            title: 'SILAMPAH Garbage System',
            category: 'Information System',
            thumbnail: '/images/projects/silampah.png',
            tech: 'PHP, MySQL, Bootstrap',
            status: 'Active',
        },
        {
            id: 3,
            title: 'Point of Sale App',
            category: 'Desktop / Web',
            thumbnail: '/images/projects/pos.png',
            tech: 'Inertia.js, PostgreSQL',
            status: 'In Progress',
        },
    ];

    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <Input
                        icon={<i className="bi bi-filter"></i>}
                        placeholder="Filter by Project name"
                    />
                    <Button
                        title="View"
                        icon={<i className="bi bi-view-list"></i>}
                    />
                </div>
                <Button
                    title="Add Project"
                    icon={<i className="bi bi-plus-lg"></i>}
                />
            </div>

            <Card
                className="bg-slate-100 text-slate-950 dark:bg-slate-100"
                content={
                    /* Bungkus div ini dengan overflow-hidden dan rounded-xl agar sudut tabel melengkung */
                    <div className="overflow-hidden rounded-xl border border-gray-400">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="border-b border-slate-100 bg-slate-500 text-xs font-semibold tracking-wider text-white uppercase">
                                    <th className="px-6 py-4">No</th>
                                    <th className="px-6 py-4">Title</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Thumbnail</th>
                                    <th className="px-6 py-4">Tech Stack</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-sm">
                                {dummyProjects.map((project, index) => (
                                    <tr
                                        key={project.id}
                                        className="transition-colors hover:bg-slate-200"
                                    >
                                        <td className="px-6 py-2">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-2">
                                            {project.title}
                                        </td>
                                        <td className="px-6 py-2">
                                            {project.category}
                                        </td>
                                        <td className="px-6 py-2">
                                            {/* {project.thumbnail ? (
                                                <div className="h-10 w-10 overflow-hidden rounded-lg border border-slate-200 bg-slate-500">
                                                    <img
                                                        src={project.thumbnail}
                                                        alt={project.title}
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex h-12 w-16 items-center justify-center rounded-lg border border-dashed border-slate-300 text-xs text-slate-400 italic dark:border-slate-700">
                                                    No Image
                                                </div>
                                            )} */}
                                        </td>
                                        <td className="px-6 py-2 font-mono">
                                            {project.tech}
                                        </td>
                                        <td className="px-6 py-2">
                                            <span
                                                className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                                                    project.status ===
                                                        'Completed' ||
                                                    project.status === 'Active'
                                                        ? 'border border-emerald-500/20 bg-emerald-500/10 text-emerald-500'
                                                        : 'border border-amber-500/20 bg-amber-500/10 text-amber-500'
                                                }`}
                                            >
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-2 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-yellow-500/50 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20">
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        alert(
                                                            `Hapus project: ${project.title}`,
                                                        )
                                                    }
                                                    className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-red-500/50 bg-red-500/10 text-red-500 hover:bg-red-500/20"
                                                    title="Hapus"
                                                >
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            />
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <div>Rows Per Page</div>
                    <div>
                        <Button
                            title="10"
                            icon={<i className="bi bi-chevron-down"></i>}
                        ></Button>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div>0-1 of 0</div>
                    <div className="flex gap-2">
                        <Button
                            icon={<i className="bi bi-chevron-bar-left"></i>}
                        ></Button>
                        <Button
                            icon={<i className="bi bi-chevron-left"></i>}
                        ></Button>
                        <Button
                            icon={<i className="bi bi-chevron-right"></i>}
                        ></Button>
                        <Button
                            icon={<i className="bi bi-chevron-bar-right"></i>}
                        ></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
