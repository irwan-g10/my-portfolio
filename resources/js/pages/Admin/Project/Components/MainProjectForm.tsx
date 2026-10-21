import Input from '@/components/ui/Input';
import FormLayout from './FormLayout';

export default function MainProjectForm() {
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
                            // value={data.title}
                            icon={<i className="bi bi-terminal"></i>}
                            // onChange={(e) => setData('title', e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            label="Role/Peran Anda"
                            // value={data.title}
                            icon={<i className="bi bi-person-vcard"></i>}
                            // onChange={(e) => setData('title', e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex-1">
                        <Input
                            label="Tanggal Pembuatan"
                            type="date"
                            // value={data.title}
                            icon={<i className="bi bi-calendar2-date"></i>}
                            // onChange={(e) => setData('title', e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            label="Kontributor/Client"
                            // value={data.title}
                            icon={<i className="bi bi-people"></i>}
                            // onChange={(e) => setData('title', e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex-1">
                        <Input
                            label="Demo URL"
                            // value={data.title}
                            icon={<i className="bi bi-browser-chrome"></i>}
                            // onChange={(e) => setData('title', e.target.value)}
                        />
                    </div>
                    <div className="flex-1">
                        <Input
                            label="Github URL"
                            // value={data.title}
                            icon={<i className="bi bi-github"></i>}
                            // onChange={(e) => setData('title', e.target.value)}
                        />
                    </div>
                </div>

                {/* </Card> */}

                <Input
                    label="Deskripsi"
                    type="textarea"
                    // value={data.description}
                    // onChange={(e) => setData('description', e.target.value)}
                />
            </div>
        </FormLayout>
    );
}
