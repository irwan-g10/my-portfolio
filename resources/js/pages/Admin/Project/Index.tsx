import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Table from '@/components/ui/Table';
import AdminHome from '../AdminHome';

export default function Project() {
    return (
        <AdminHome title="Project">
            <Card>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <Input
                            icon={<i className="bi bi-filter"></i>}
                            placeholder="Filter by Project name"
                        />
                        <Button
                            title="View"
                            icon={<i className="bi bi-view-list"></i>}
                        />
                    </div>
                    <Button
                        title="Add Project"
                        icon={<i className="bi bi-plus-lg"></i>}
                    />
                </div>
            </Card>
            <Table />
        </AdminHome>
    );
}
