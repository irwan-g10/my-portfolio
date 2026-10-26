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
                            value={data.projectName}
                            icon={<i className="bi bi-terminal"></i>}
                            onChange={(e) =>
                                setData('projectName', e.target.value)
                            }
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
                            value={data.createdDate}
                            icon={<i className="bi bi-calendar2-date"></i>}
                            onChange={(e) =>
                                setData('createdDate', e.target.value)
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
                            value={data.demoUrl}
                            icon={<i className="bi bi-browser-chrome"></i>}
                            onChange={(e) => setData('demoUrl', e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            label="Github URL"
                            value={data.githubUrl}
                            icon={<i className="bi bi-github"></i>}
                            onChange={(e) =>
                                setData('githubUrl', e.target.value)
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
