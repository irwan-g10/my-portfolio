import { useForm } from '@inertiajs/react';
import AdminLayout from '../AdminLayout';
import FeatureProjectForm from './Components/FeatureProjectForm';
import FooterProjectForm from './Components/FooterProjectForm';
import MainProjectForm from './Components/MainProjectForm';
import SkillProjectForm from './Components/SkillProjectForm';
import StatusProjectForm from './Components/StatusProjectForm';
import TechStackProjectForm from './Components/TechStackProjectForm';
import ThumbnailProjectForm from './Components/ThumbnailProjectForm';

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        tech_stack: '',
        skill: '',
        status: '',
        thumbnail: '',
    });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // post('/projects', {
    //     //     onSuccess: () => reset(),
    //     // });
    // };
    return (
        <AdminLayout title="Tambah Data Project">
            <form>
                <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex flex-1 flex-col gap-2">
                        <MainProjectForm />
                        <StatusProjectForm />
                        <ThumbnailProjectForm />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                        <FeatureProjectForm />
                        <TechStackProjectForm />
                        <SkillProjectForm />
                    </div>
                </div>
                <FooterProjectForm />
            </form>
        </AdminLayout>
    );
}
