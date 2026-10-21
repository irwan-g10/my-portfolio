import AdminLayout from '../AdminLayout';
import FormLayout from '../Project/Components/FormLayout';
import SkillProjectForm from '../Project/Components/SkillProjectForm';
import TechStackProjectForm from '../Project/Components/TechStackProjectForm';
import ThumbnailProjectForm from '../Project/Components/ThumbnailProjectForm';
import MainJourneyForm from './Components/MainJourneyForm';

export default function Create() {
    const workflows = [
        'Membangun arsitektur basis data relasional menggunakan MySQL dan merancang migrasi tabel melalui Laravel Eloquent',
        'Mengembangkan antarmuka pengguna interaktif dan modular menggunakan React, TypeScript, dan Tailwind CSS',
        'Mengintegrasikan sistem manajemen form dan *state management* menggunakan Inertia.js untuk komunikasi *seamless* dengan backend',
        'Melakukan *debugging*, optimasi performa *component rendering*, serta perbaikan *error handling* pada terminal dan *log* sistem',
        'Mengelola deployment aplikasi web ke server produksi menggunakan cPanel dan memastikan struktur kode bersih sesuai prinsip *clean code*',
    ];
    return (
        <AdminLayout title="Tambah Data Journey">
            <form>
                <div className="flex gap-2">
                    <div className="grid flex-10 gap-2">
                        <MainJourneyForm />
                        <ThumbnailProjectForm />
                    </div>
                    <div className="grid flex-7 gap-2">
                        <FormLayout
                            title="Apa yang telah dikerjakan"
                            data={workflows}
                        ></FormLayout>
                        <TechStackProjectForm />
                        <SkillProjectForm />
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}
