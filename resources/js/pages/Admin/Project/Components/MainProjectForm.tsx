import Input from '@/components/ui/Input';
import FormLayout from './FormLayout';

export default function MainProjectForm({ data, setData }) {
    const dummyFeatures = [
        'using oauth2 auth',
        'implement login page',
        'integration payment gateway',
        'dashboard analytics view',
        'dark mode support',
    ];
    return (
        <FormLayout addForm={false}>
            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <div className="flex-1">
                        <Input
                            label="Nama Project"
                            value={data.title}
                            icon={<i className="bi bi-terminal"></i>}
                            onChange={(e) => setData('title', e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            label="Role/Peran Anda"
                            value={data.role}
                            icon={<i className="bi bi-person-vcard"></i>}
                            onChange={(e) => setData('role', e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex-1">
                        <Input
                            label="Tanggal Pembuatan"
                            type="date"
                            value={data.created_date}
                            icon={<i className="bi bi-calendar2-date"></i>}
                            onChange={(e) =>
                                setData('created_date', e.target.value)
                            }
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            label="Kontributor/Client"
                            value={data.contributor}
                            icon={<i className="bi bi-people"></i>}
                            onChange={(e) =>
                                setData('contributor', e.target.value)
                            }
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex-1">
                        <Input
                            label="Demo URL"
                            value={data.demo_url}
                            icon={<i className="bi bi-browser-chrome"></i>}
                            onChange={(e) =>
                                setData('demo_url', e.target.value)
                            }
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            label="Github URL"
                            value={data.github_url}
                            icon={<i className="bi bi-github"></i>}
                            onChange={(e) =>
                                setData('github_url', e.target.value)
                            }
                        />
                    </div>
                </div>

                {/* </Card> */}

                <Input
                    label="Deskripsi"
                    type="textarea"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />
            </div>
        </FormLayout>
    );
}
