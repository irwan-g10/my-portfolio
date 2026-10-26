import { useForm } from '@inertiajs/react';
import AdminLayout from '../AdminLayout';
import FeatureProjectForm from './Components/FeatureProjectForm';
import FooterProjectForm from './Components/FooterProjectForm';
import MainProjectForm from './Components/MainProjectForm';
import SkillProjectForm from './Components/SkillProjectForm';
import StatusProjectForm from './Components/StatusProjectForm';
import TechStackProjectForm from './Components/TechStackProjectForm';
import ThumbnailProjectForm from './Components/ThumbnailProjectForm';

export default function Create({ skills }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        projectName: '',
        role: '',
        createdDate: '',
        contributor: '',
        demoUrl: '',
        githubUrl: '',
        description: '',
        statusProject: '',
        techStack: '',
        features: [] as string[],
        skill: [] as string[],
        thumbnail: '',
        images: [] as string[],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // post('/projects', {
        //     onSuccess: () => reset(),
        // });
        console.log(data);
    };
    return (
        <AdminLayout title="Tambah Data Project">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex flex-1 flex-col gap-2">
                        <MainProjectForm
                            data={data}
                            setData={setData}
                        />
                        <StatusProjectForm
                            data={data}
                            setData={setData}
                        />
                        <TechStackProjectForm
                            data={data}
                            setData={setData}
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                        <FeatureProjectForm
                            data={data}
                            setData={setData}
                        />
                        <SkillProjectForm
                            skills={skills}
                            data={data}
                            setData={setData}
                        />
                        <ThumbnailProjectForm />
                    </div>
                </div>
                <FooterProjectForm />
            </form>
        </AdminLayout>
    );
}
