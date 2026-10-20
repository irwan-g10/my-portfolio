import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
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
            <form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                    <div className="0 flex-10">
                        <Card
                            content={
                                <div className="flex flex-col gap-3">
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <Input
                                                label="Nama Project"
                                                value={data.title}
                                                icon={
                                                    <i className="bi bi-terminal"></i>
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'title',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <Input
                                                label="Role/Peran Anda"
                                                value={data.title}
                                                icon={
                                                    <i className="bi bi-person-vcard"></i>
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'title',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <Input
                                                label="Tanggal Pembuatan"
                                                type="date"
                                                value={data.title}
                                                icon={
                                                    <i className="bi bi-calendar2-date"></i>
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'title',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <Input
                                                label="Kontributor/Client"
                                                value={data.title}
                                                icon={
                                                    <i className="bi bi-people"></i>
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'title',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <Input
                                                label="Demo URL"
                                                value={data.title}
                                                icon={
                                                    <i className="bi bi-browser-chrome"></i>
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'title',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <Input
                                                label="Github URL"
                                                value={data.title}
                                                icon={
                                                    <i className="bi bi-github"></i>
                                                }
                                                onChange={(e) =>
                                                    setData(
                                                        'title',
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-1 text-xs font-semibold">
                                        Fitur Proyek
                                    </div>
                                    <div className="flex flex-wrap justify-end gap-2">
                                        <div className="flex items-center justify-between gap-5 rounded-full border-2 border-blue-500/20 bg-blue-500/10 p-2 px-4 text-xs font-semibold text-blue-500">
                                            <div>using oauth2 auth</div>
                                            <div className="cursor-pointer">
                                                x
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-5 rounded-full border-2 border-blue-500/20 bg-blue-500/10 p-2 px-4 text-xs font-semibold text-blue-500">
                                            <div>implement login page</div>
                                            <div className="cursor-pointer">
                                                x
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-5 rounded-full border-2 border-blue-500/20 bg-blue-500/10 p-2 px-4 text-xs font-semibold text-blue-500">
                                            <div>
                                                integration payment gateway
                                            </div>
                                            <div className="cursor-pointer">
                                                x
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-5 rounded-full border-2 border-blue-500/20 bg-blue-500/10 p-2 px-4 text-xs font-semibold text-blue-500">
                                            <div>dashboard analytics view</div>
                                            <div className="cursor-pointer">
                                                x
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <Input
                                                placeholder="tambah data Fitur Proyek"
                                                icon={
                                                    <i className="bi bi-stars"></i>
                                                }
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                title="Tambah"
                                                icon={
                                                    <i className="bi bi-node-plus"></i>
                                                }
                                            />
                                        </div>
                                    </div>
                                    <Input
                                        label="Deskripsi"
                                        type="textarea"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                'description',
                                                e.target.value,
                                            )
                                        }
                                    />
                                    <div className="flex-1 text-xs font-semibold">
                                        Tech Stack
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <Input
                                                placeholder="Cari Tech Stack atau tambah data Tech Stack"
                                                icon={
                                                    <i className="bi bi-search"></i>
                                                }
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                title="Tambah"
                                                icon={
                                                    <i className="bi bi-node-plus"></i>
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-end gap-2">
                                        <Input
                                            type="radio"
                                            label="Fullstack"
                                            name="tech"
                                        />
                                        <Input
                                            type="radio"
                                            label="Backend"
                                            name="tech"
                                        />
                                        <Input
                                            type="radio"
                                            label="Frontend"
                                            name="tech"
                                        />
                                        <Input
                                            type="radio"
                                            label="Mobile"
                                            name="tech"
                                        />
                                        <Input
                                            type="radio"
                                            label="Devops"
                                            name="tech"
                                        />
                                    </div>

                                    <div className="flex-1 text-xs font-semibold">
                                        Skill
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <Input
                                                placeholder="Cari skill atau tambah data skill"
                                                icon={
                                                    <i className="bi bi-search"></i>
                                                }
                                            />
                                        </div>
                                        <div>
                                            <Button
                                                title="Tambah"
                                                icon={
                                                    <i className="bi bi-node-plus"></i>
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap justify-end gap-2">
                                        <Input
                                            type="checkbox"
                                            label="React"
                                        />
                                        <Input
                                            type="checkbox"
                                            label="Next.js"
                                        />
                                        <Input
                                            type="checkbox"
                                            label="Tailwind CSS"
                                        />
                                        <Input
                                            type="checkbox"
                                            label="JavaScript"
                                        />
                                        <Input
                                            type="checkbox"
                                            label="TypeScript"
                                        />
                                        <Input
                                            type="checkbox"
                                            label="Node.js"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="rounded-md bg-amber-500 px-4 py-2 font-bold text-slate-950 transition duration-200 hover:bg-amber-400 disabled:opacity-50"
                                    >
                                        {processing
                                            ? 'Menyimpan...'
                                            : 'Tambahkan'}
                                    </button>
                                </div>
                            }
                            className="rounded-lg"
                        />
                    </div>
                    <div className="0 flex-8">
                        <Card
                            content={
                                <div>
                                    <div>Status Proyek</div>
                                </div>
                            }
                            className=""
                        />
                        <Card
                            content={
                                <div>
                                    <div>Thumbnail Proyek</div>
                                </div>
                            }
                            className=""
                        />
                        <Card
                            content={
                                <div>
                                    <div>Upload Galeri Gambar Tambahan</div>
                                </div>
                            }
                            className=""
                        />
                        <Card
                            content={
                                <div>
                                    <div>Live Preview Kartu</div>
                                </div>
                            }
                            className="h-full"
                        />
                    </div>
                </div>
            </form>
            <div className="flex flex-col gap-2"></div>
        </AdminHome>
    );
}
