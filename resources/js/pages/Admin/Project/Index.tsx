import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import AdminLayout from '../AdminLayout';
import StatisticCard from './Components/StatisticCard';

export default function Project() {
    const dummyProjects = [
        {
            id: 1,
            title: 'Vantomic Studio',
            techStack: 'Laravel, React, Tailwind',
            collaborator: 'PT Solusi Digital',
            role: 'Fullstack Developer',
            skill: 'PHP, JavaScript',
            status: 'Completed',
        },
        {
            id: 2,
            title: 'SILAMPAH Garbage System',
            techStack: 'PHP, MySQL, Bootstrap',
            collaborator: 'Dinas Lingkungan Hidup',
            role: 'Backend Developer',
            skill: 'PHP, MySQL',
            status: 'Active',
        },
        {
            id: 3,
            title: 'Point of Sale App',
            techStack: 'Inertia.js, PostgreSQL',
            collaborator: 'Toko Berkah Jaya',
            role: 'Lead Developer',
            skill: 'TypeScript, React',
            status: 'In Progress',
        },
        {
            id: 4,
            title: 'E-Commerce Dashboard',
            techStack: 'Next.js, Tailwind CSS',
            collaborator: 'Global Retail Inc.',
            role: 'Frontend Engineer',
            skill: 'Next.js, Tailwind',
            status: 'Completed',
        },
        {
            id: 5,
            title: 'Company Profile Web',
            techStack: 'HTML, CSS, JavaScript',
            collaborator: 'CV Karya Mandiri',
            role: 'Web Designer',
            skill: 'HTML, CSS',
            status: 'Pending',
        },
    ];
    return (
        <AdminLayout title="Project">
            <div className="grid gap-2">
                <div>
                    <StatisticCard
                        title="Project"
                        total="10"
                    />
                </div>
                <Card className="relative grid gap-5 text-xs">
                    <div className="flex w-full items-center gap-2">
                        <div className="">Cari data :</div>
                        <div className="flex-1">
                            <Input
                                icon={<i className="bi bi-search"></i>}
                                placeholder="Filter by Project name"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                title="View"
                                icon={<i className="bi bi-view-list"></i>}
                            />
                            <Button
                                title="Sort By"
                                icon={<i className="bi bi-sort-down"></i>}
                            />
                            <Button
                                title="Tech Stack"
                                icon={<i className="bi bi-sort-down"></i>}
                            />
                            <Button
                                title="Status"
                                icon={<i className="bi bi-sort-down"></i>}
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr>
                                    <th className="">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="">No</th>
                                    <th className="">Project Name</th>
                                    <th className="">Tech Stack</th>
                                    <th className="">Colaborator</th>
                                    <th className="">Role</th>
                                    <th className="">Skill</th>
                                    <th className="">Status</th>
                                    <th className="">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-600">
                                {dummyProjects.map((project, index) => (
                                    <tr
                                        key={project.id}
                                        className=""
                                    >
                                        <td className="py-3">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="py-3 whitespace-nowrap">
                                            {index + 1}
                                        </td>
                                        <td className="py-3">
                                            {project.title}
                                        </td>
                                        <td className="py-3">
                                            {project.techStack}
                                        </td>
                                        <td className="py-3">
                                            {project.collaborator}
                                        </td>
                                        <td className="py-3">{project.role}</td>
                                        <td className="py-3">
                                            {project.skill}
                                        </td>
                                        <td className="py-3">
                                            {project.status}
                                        </td>
                                        <td className="py-3whitespace-nowrap">
                                            edit hapus
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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
        </AdminLayout>
    );
}
