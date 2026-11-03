import StatisticCard from '../../../components/StatisticCard';
import AdminLayout from '../AdminLayout';
import TechStackTable from './Components/TechStackTable';

export default function TechStack({ techStacks }) {
    // console.log(techStacks);
    // console.log(techStacks);
    return (
        <AdminLayout title="Tech Stack">
            <div className="grid gap-2">
                <div className="h-50 w-50">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                </div>

                <div>
                    <StatisticCard
                        title="Tech Stack"
                        total={techStacks?.total.toString()}
                        addUrl="/tech-stacks/create"
                    />
                </div>
                <TechStackTable techStacks={techStacks} />
            </div>
        </AdminLayout>
    );
}
