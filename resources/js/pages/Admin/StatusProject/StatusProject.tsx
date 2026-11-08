import StatisticCard from '@/components/StatisticCard';
import AdminLayout from '../AdminLayout';
import StatusProjectTable from '../Project/Components/StatusProjectContent';

export default function StatusProject({ statusProject }) {
    console.log(statusProject);
    return (
        <AdminLayout>
            <div className="grid gap-2">
                <div>
                    <StatisticCard
                        title="Status Project"
                        total={'18'}
                        addUrl="/status-projects/create"
                    />
                </div>
                <StatusProjectTable statusProjects={statusProject} />
            </div>
        </AdminLayout>
    );
}
