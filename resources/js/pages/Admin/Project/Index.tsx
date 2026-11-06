import StatisticCard from '../../../components/StatisticCard';
import AdminLayout from '../AdminLayout';
import ProjectTable from './Components/ProjectTable';

export default function Project({ projects }) {
    console.log('Projects data:', projects); // Log the projects data to the console
    return (
        <AdminLayout title="Project">
            <div className="grid gap-2">
                <div>
                    <StatisticCard
                        title="Project"
                        total="10"
                    />
                </div>
                <ProjectTable projects={projects} />
            </div>
        </AdminLayout>
    );
}
