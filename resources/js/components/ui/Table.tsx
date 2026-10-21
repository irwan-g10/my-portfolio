import Button from './Button';
import Card from './Card';
import Input from './Input';

interface TableProps {
    href?: string;
}

export default function Table({ href }: TableProps) {
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
        <div className="flex flex-col gap-5 text-xs">
            <Card className="rounded-lg">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div>Cari data :</div>
                        <div className="w-70">
                            <Input
                                icon={<i className="bi bi-search"></i>}
                                placeholder="Filter by Project name"
                            />
                        </div>
                        <Button
                            title="View"
                            icon={<i className="bi bi-view-list"></i>}
                        />
                        <Button
                            title="Sort By"
                            icon={<i className="bi bi-sort-down"></i>}
                        />
                    </div>
                    <Button
                        title="Add Project"
                        icon={<i className="bi bi-plus"></i>}
                        href={href}
                    />
                </div>
            </Card>
            <div className="overflow-hidden">
                <Card className="rounded-lg">
                    <table className="w-full border-collapse overflow-x-auto text-left">
                        <thead>
                            <tr className="border-b-2 border-slate-100 uppercase">
                                <th className="px-6 py-4"></th>
                                <th className="px-6 py-4">No</th>
                                {/* <th className="px-6 py-4">Thumbnail</th> */}
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Tech Stack</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-600">
                            {dummyProjects.map((project, index) => (
                                <tr
                                    key={project.id}
                                    className="transition-colors hover:bg-slate-100/20"
                                >
                                    <td className="px-6 py-2">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="px-6 py-2">{index + 1}</td>
                                    {/* <td className="px-6 py-2">
                                        {project.thumbnail ? (
                                            <div className="h-25 w-50 overflow-hidden rounded-lg border">
                                                <img
                                                    src="/images/website.png"
                                                    alt={project.title}
                                                    className="h-full w-full object-cover invert hover:scale-110"
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex h-12 w-16 items-center justify-center rounded-lg border border-dashed border-slate-300 text-slate-400 italic dark:border-slate-700">
                                                No Image
                                            </div>
                                        )}
                                    </td> */}
                                    <td className="px-6 py-2">
                                        {project.title}
                                    </td>
                                    <td className="px-6 py-2">
                                        {project.category}
                                    </td>
                                    <td className="px-6 py-2 font-mono">
                                        {project.tech}
                                    </td>
                                    <td className="px-6 py-2">
                                        <span
                                            className={`inline-flex items-center rounded-full px-2.5 py-1 font-semibold ${
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
                </Card>
            </div>

            {/* <Card className=""> */}
            <Card className="rounded-lg">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <div>Rows Per Page</div>
                        <div>5</div>
                        <div>
                            <i className="bi bi-chevron-down"></i>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <div>Menampilkan</div>
                        <div>1-10</div>
                        <div>dari 24 data</div>
                        <button className="rounded-lg bg-amber-500 p-2">
                            <i className="bi bi-chevron-left"></i> Prev
                        </button>
                        <button className="w-7 rounded-lg bg-amber-500 p-2">
                            1
                        </button>
                        <button className="w-7 rounded-lg bg-amber-500 p-2">
                            2
                        </button>
                        <button className="w-7 rounded-lg bg-amber-500 p-2">
                            3
                        </button>
                        <button className="rounded-lg bg-amber-500 p-2">
                            Next <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
