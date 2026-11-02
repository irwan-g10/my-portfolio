import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';
import Input from '@/components/ui/Input';

export default function TechStackTableToolbar() {
    return (
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
                    options={['Terbaru', 'Terlama', 'Nama (A-Z)', 'Nama (Z-A)']}
                    // value={data.sortBy}
                    // onChange={(e) =>
                    //     setData('sortBy', e.target.value)
                    // }
                />
            </div>
        </div>
    );
}
