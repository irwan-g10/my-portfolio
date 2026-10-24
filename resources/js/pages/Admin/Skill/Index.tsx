import CategoryBadge from '@/components/Common/CategoryBadge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Dropdown from '@/components/ui/Dropdown';
import Input from '@/components/ui/Input';
import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '../AdminLayout';
import FormLayout from '../Project/Components/FormLayout';

export default function Index({ skills }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        category: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // post('/skills', {
        //     onSuccess: () => reset(),
        //     onError: (erors) => console.log(erors),
        // });
        console.log(skills);
    };
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
                    <form onSubmit={handleSubmit}>
                        <FormLayout addForm={false}>
                            <Input
                                label="Nama Skill"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                            />
                            <div className="grid">
                                <Dropdown
                                    label="Kategori"
                                    icon={<i className="bi bi-tags-fill"></i>}
                                    options={[
                                        'Programming Language',
                                        'Framework',
                                        'Database',
                                        'Version Control',
                                        'AI Coding Assistant',
                                        'Tools',
                                    ]}
                                    value={data.category}
                                    onChange={(e) =>
                                        setData('category', e.target.value)
                                    }
                                />
                            </div>

                            <Button
                                type="submit"
                                title="Add Skill"
                                icon={<i className="bi bi-plus"></i>}
                                // href={'skills/create'}
                            />
                        </FormLayout>
                    </form>
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
                                    <th className="p-2">
                                        <input type="checkbox" />
                                    </th>
                                    <th className="p-2">No</th>
                                    <th className="p-2">Skill Name</th>
                                    <th className="p-2">Category</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-600">
                                {/* Cek apakah data skills ada dan tidak kosong */}
                                {skills ? (
                                    skills.data.map((skill, index) => (
                                        <tr key={skill.id}>
                                            <td className="p-2">
                                                {' '}
                                                <input type="checkbox" />
                                            </td>
                                            <td className="p-2">{skill.id}</td>
                                            <td className="p-2">
                                                {skill.name}
                                            </td>
                                            <td className="p-2">
                                                {skill.category}
                                            </td>
                                            <td>hapus | Ubah</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="p-4 text-center text-gray-500">
                                            Belum ada data skill.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-1 text-slate-400">
                            <div>Menampilkan</div>
                            <div>
                                {skills.from || 0} - {skills.to || 0}
                            </div>
                            <div>dari {skills.total} data</div>
                        </div>

                        <div className="flex items-center gap-1">
                            {skills.links &&
                                skills.links.map((link, idx) => (
                                    <Link
                                        key={idx}
                                        href={link.url || '#'}
                                        className={`rounded-lg px-3 py-1 text-xs font-semibold transition-colors ${
                                            link.active
                                                ? 'bg-amber-500 text-slate-950'
                                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                        } ${!link.url ? 'cursor-not-allowed opacity-40' : ''}`}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                ))}
                        </div>
                    </div>
                    {/* <div className="flex justify-between">
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
                    </div> */}
                </Card>
            </div>
        </AdminLayout>
    );
}
