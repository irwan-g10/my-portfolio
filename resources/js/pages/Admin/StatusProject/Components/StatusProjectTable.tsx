import Pagination from '@/components/Pagination';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Dropdown from '@/components/ui/Dropdown';
import Input from '@/components/ui/Input';
import StatusProjectTableContent from './StatusProjectTableContent';

export default function StatusProjectTable({ statusProjects }) {
    return (
        <Card className="relative grid gap-5 text-xs">
            <div className="flex w-full items-center gap-2">
                <div className="flex-1">
                    <Input
                        icon={<i className="bi bi-search"></i>}
                        inline
                        label={'Cari data :'}
                        placeholder="Filter by Project name"
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        title="View"
                        icon={<i className="bi bi-view-list"></i>}
                    />
                    <Dropdown
                        label="Sort By"
                        icon={<i className="bi bi-sort-down"></i>}
                        options={[
                            'Terbaru',
                            'Terlama',
                            'Nama (A-Z)',
                            'Nama (Z-A)',
                        ]}
                        // value={data.sortBy}
                        // onChange={(e) =>
                        //     setData('sortBy', e.target.value)
                        // }
                    />
                </div>
            </div>
            <StatusProjectTableContent statusProjects={statusProjects} />
            <Pagination data={statusProjects} />
        </Card>
    );
}
