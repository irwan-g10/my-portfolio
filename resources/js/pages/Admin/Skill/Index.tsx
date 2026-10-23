import CategoryBadge from '@/components/Common/CategoryBadge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import AdminLayout from '../AdminLayout';
import FormLayout from '../Project/Components/FormLayout';

export default function Index() {
    const dummySkills = [
        {
            id: 1,
            title: 'PHP',
            category: 'Programming Language',
        },
        {
            id: 2,
            title: 'TypeScript',
            category: 'Programming Language',
        },
        {
            id: 3,
            title: 'Laravel',
            category: 'Framework',
        },
        {
            id: 4,
            title: 'React.js',
            category: 'Framework',
        },
        {
            id: 5,
            title: 'Tailwind CSS',
            category: 'Framework',
        },
        {
            id: 6,
            title: 'MySQL',
            category: 'Database',
        },
        {
            id: 7,
            title: 'Git',
            category: 'Version Control',
        },
        {
            id: 8,
            title: 'GitHub',
            category: 'Version Control',
        },
        {
            id: 9,
            title: 'GitHub Copilot',
            category: 'AI Coding Assistant',
        },
        {
            id: 10,
            title: 'Docker',
            category: 'Tools',
        },
    ];
    return (
        <AdminLayout title="Skill">
            <div className="grid gap-2">
                <div className="grid grid-cols-2 gap-5">
                    <div className="grid gap-2">
                        <Card
                            className={`flex origin-bottom cursor-pointer flex-col justify-between text-xs transition-transform duration-300`}
                        >
                            <div className="flex justify-between border-b-2 border-slate-950 pb-2">
                                <div className="text-lg font-semibold">
                                    Skill
                                </div>
                                <Card className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 p-0"></Card>
                            </div>
                            <div className="flex justify-between gap-2">
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-bold">
                                        20
                                    </span>
                                    <span className="text-">Total Skill </span>
                                </div>
                            </div>
                        </Card>
                        <div className="flex flex-col gap-2">
                            <Button
                                title="Delete Selected Skill"
                                icon={<i className="bi bi-plus"></i>}
                                href={'projects/create'}
                            />
                            <div className="grid grid-cols-2">
                                <CategoryBadge
                                    title={'Table'}
                                    isActive
                                />
                                <CategoryBadge title={'Card'} />
                            </div>
                        </div>
                    </div>
                    <FormLayout addForm={false}>
                        <Input label="Nama Skill" />
                        <Input label="Kategori" />
                        <Button
                            title="Add Skill"
                            icon={<i className="bi bi-plus"></i>}
                            href={'skills/create'}
                        />
                    </FormLayout>
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
                                    <th className="">Skill Name</th>
                                    <th className="">Category</th>
                                    <th className="">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-600">
                                {dummySkills.map((skill, index) => (
                                    <tr
                                        key={skill.id}
                                        className=""
                                    >
                                        <td className="py-3">
                                            <input type="checkbox" />
                                        </td>
                                        <td className="py-3">{index + 1}</td>
                                        <td className="py-3">{skill.title}</td>
                                        <td className="py-3">
                                            {skill.category}
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
