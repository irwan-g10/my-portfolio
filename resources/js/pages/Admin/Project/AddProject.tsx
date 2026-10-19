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
                                <div>
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

                                    <div className="flex">
                                        <Input
                                            label="Fitur Proyek"
                                            value={data.title}
                                            onChange={(e) =>
                                                setData('title', e.target.value)
                                            }
                                        />
                                        <Button title="Tambahkan fitur" />
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
                                    <Input
                                        label="Tech Stack"
                                        value={data.tech_stack}
                                        onChange={(e) =>
                                            setData(
                                                'tech_stack',
                                                e.target.value,
                                            )
                                        }
                                    />

                                    <Input
                                        label="Skill"
                                        value={data.skill}
                                        onChange={(e) =>
                                            setData('skill', e.target.value)
                                        }
                                    />

                                    <Input
                                        label="Status"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData('status', e.target.value)
                                        }
                                    />
                                    <Input
                                        label="Thumvnail"
                                        value={data.status}
                                        onChange={(e) =>
                                            setData('thumbnail', e.target.value)
                                        }
                                    />

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
