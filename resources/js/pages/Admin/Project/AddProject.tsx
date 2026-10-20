import { useForm } from '@inertiajs/react';
import AdminHome from '../AdminHome';
import FeatureProjectForm from './Components/FeatureProjectForm';
import FooterProjectForm from './Components/FooterProjectForm';
import MainProjectForm from './Components/MainProjectForm';
import SkillProjectForm from './Components/SkillProjectForm';
import StatusProjectForm from './Components/StatusProjectForm';
import TechStackProjectForm from './Components/TechStackProjectForm';
import ThumbnailProjectForm from './Components/ThumbnailProjectForm';

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
            <div className="flex flex-col gap-2">
                <form onSubmit={handleSubmit}>
                    <div className="flex gap-2 text-xs">
                        <div className="flex flex-10 flex-col gap-2">
                            <MainProjectForm />
                            <StatusProjectForm />
                            <ThumbnailProjectForm />
                        </div>
                        <div className="flex flex-8 flex-col gap-2">
                            <FeatureProjectForm />
                            <TechStackProjectForm />
                            <SkillProjectForm />
                        </div>
                    </div>
                    <FooterProjectForm />
                </form>
            </div>
        </AdminHome>
    );
}
